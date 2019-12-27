class meet{
    constructor(){
        this.param='/:token/:oneid'
    }

    async get(c){
        let oneid=c.param.oneid;
    
        let sql='select * from describe,apply where apply.aid=describe.aid and describe.shortdes_id=$1';
        let ret=await c.service.pgdb.query(sql,[oneid]);
        
        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'相遇消息为空'
          }
        }else{
          c.res.body={
            status:0,
            data:ret.rows[0]
          }   
        }
    }
}

module.exports=meet;