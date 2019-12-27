class myreq{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let token=c.param.token;
    
        let sql='select apply.aid,apply.uid,apply.shortdes_id,apply.astatus,apply.acontent,apply.atime,describe.shortdes from apply,describe where apply.shortdes_id=describe.shortdes_id and atype=$2 and apply.uid in(select uid from users where token=$1) order by atime desc'
        let ret=await c.service.pgdb.query(sql,[token,'exchange']);
      
        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'暂无申请'
          }
        }else{
          
          c.res.body={
            status:0,
            data:ret.rows
          }
        }
    }
}

module.exports=myreq;