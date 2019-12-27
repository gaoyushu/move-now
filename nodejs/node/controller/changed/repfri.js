class repfri{
    constructor(){
        this.param='/'
    }
    async update(c){
        c.body=JSON.parse(c.body);
        let token=c.body.token;
        let aid=c.body.aid;
        let astatus=c.body.reply;
        let dstatus=astatus<=0?'unfriend':'friend';
        
        let sql='select * from users where token=$1';
        let ret=await c.service.pgdb.query(sql,[token]);
        let mine=ret.rows[0];
        
        sql='update apply set astatus=$1 where aid=$2';
        ret=await c.service.pgdb.query(sql,[astatus,aid]);
        
        sql='update describe set dstatus=$1 where shortdes_id in(select shortdes_id from apply where aid=$2)';
        ret=await c.service.pgdb.query(sql,[dstatus,aid]);
        
        if(astatus==1){
          sql='select * from apply where aid=$1';
          ret=await c.service.pgdb.query(sql,[aid]);
          let apply=ret.rows[0];
          sql='insert into friends(uid,fuid) values($1,$2)';
          ret=await c.service.pgdb.query(sql,[apply.uid,mine.uid]);
        }
      
        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'回复失败！'
          }
        }else{
          c.res.body={
            status:0,
            data:'回复成功！'
          }
        }
    }
}

module.exports=repfri;