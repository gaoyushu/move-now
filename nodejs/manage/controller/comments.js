class login{
    constructor(){
        this.param='/';
    }

    async get(c){

        let sql='SELECT * FROM comments';
        let ret=await c.service.pgdb.query(sql);
        if(ret.rowCount<=0){
           c.res.body={
              status:-1,
               data:'无管理员信息！'
           };
        }else{c.res.body={status: 0, data:ret.rows }};
    }
}

module.exports=login;
