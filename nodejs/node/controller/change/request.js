class request{
    constructor(){
        this.param='/'
    }
    async create(c){
        c.body=JSON.parse(c.body);
        let token=c.body.token;
        let oneid=c.body.oneid;
        let content=c.body.content;
        let diaryid=c.body.diaryid;
        
        let sql='SELECT * FROM users WHERE token=$1';
        let ret=await c.service.pgdb.query(sql,[token]);
        let uid=ret.rows[0].uid;
      
        sql='update diary set exchange=$1 where did=$2';
        ret=await c.service.pgdb.query(sql,['request',diaryid]);
        
        sql='SELECT * FROM apply WHERE uid=$1 AND shortdes_id=$2 AND atype=$3';
        ret=await c.service.pgdb.query(sql,[uid,oneid,'exchange']);
        if(!ret.rowCount<=0){c.res.body={status:-1, data:'您已经申请，请不要重复申请！'};return -1;};
        // 更新一句话申请数量
        sql='select count(aid) from apply where atype=$1 and shortdes_id=$2';
        ret=await c.service.pgdb.query(sql,['exchange',oneid]);
        let dnum=ret.rows[0].count||1;
        sql='update describe set dnum=$1 where shortdes_id=$2';
        ret=await c.service.pgdb.query(sql,[dnum+1,oneid])
      
        sql='SELECT MAX(aid) FROM apply';
        ret=await c.service.pgdb.query(sql);
        let aid=ret.rows[0].max+1 || 1;
      
        let time=new Date().toLocaleString('chinese',{hour12:false})
        
        sql='INSERT INTO apply(aid,uid,shortdes_id,acontent,atype,atime,did) VALUES($1,$2,$3,$4,$5,$6,$7)';
        ret=await c.service.pgdb.query(sql,[aid,uid,oneid,content,'exchange',time,diaryid]);
        
        c.res.body={status:1, data:'申请成功！'};
        return 0;
    }
}

module.exports=request;