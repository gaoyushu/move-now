class exit{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let token=c.param.token;

        let sql='update users set ustatus=2 where token=$1';
        let ret=await c.service.pgdb.query(sql,[token]);

        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'退出失败！'
          }
        }else{
          c.res.body={
            status:0,
            data:'退出成功！'
          }
        }
    }
}

module.exports=exit;