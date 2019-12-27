class addfri{
    constructor(){
        this.param='/'
    }
    async create(c){
        c.body=JSON.parse(c.body)
        let token=c.body.token;
        let oneid=c.body.oneid;
        let text=c.body.text;
        
        let sql='select * from users where token=$1';
        let ret=await c.service.pgdb.query(sql,[token]);
        let mine=ret.rows[0];
      
        // 是否已经申请
        sql='select * from apply where shortdes_id=$1 and astatus=$3 and atype=$2';
        ret=await c.service.pgdb.query(sql,[oneid,'friend','0']);
        if(ret.rowCount>0){c.res.body={status:-1,data:'您已经申请过加好友！请勿重复申请！'};return -1}
        
        // 改变一句话状态
        sql='update describe set dstatus=$2 where shortdes_id=$1';
        ret=await c.service.pgdb.query(sql,[oneid,'request']);
        
        // 插入申请
        let atime=new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false})
        sql='select max(aid) from apply';
        ret=await c.service.pgdb.query(sql);
        let aid=ret.rows[0].max+1||1;
        sql='insert into apply(aid,uid,shortdes_id,acontent,atype,atime) values($1,$2,$3,$4,$5,$6)';
        ret=await c.service.pgdb.query(sql,[aid,mine.uid,oneid,text,'friend',atime]);
        
        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'申请失败！'
          }
        }else{
          c.res.body={
            status:0,
            data:'申请成功！'
          }
        }
    }
}

module.exports=addfri;
