class add{
    constructor(){
        this.param='/'
    }

    async create(c){
        c.body=JSON.parse(c.body);
        let token=c.body.token;
        let title=c.body.title;
        let content=c.body.content;
        let diaryid=c.body.diaryid;
        
        let sql='SELECT MAX(shortdes_id) FROM describe';
        let ret=await c.service.pgdb.query(sql);
        let id=ret.rows[0].max+1 || 1;
        let time=new Date().toLocaleString('chinese',{hour12:false})
      
        sql='SELECT * FROM users WHERE token=$1';
        ret=await c.service.pgdb.query(sql,[token]);
        let uid=ret.rows[0].uid;
        
        sql='update diary set exchange=$1 where did=$2';
        ret=await c.service.pgdb.query(sql,['request',diaryid]);
      
        sql='INSERT INTO describe(shortdes_id,uid,shortdes,longdes,dtime,did) VALUES($1,$2,$3,$4,$5,$6)';
        ret=await c.service.pgdb.query(sql,[id,uid,title,content,time,diaryid]);
        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'发布失败!'
          }
        }else{
          c.res.body={
            status:0,
            data:id
          }
        }
    }
}

module.exports=add;