class login{
    constructor(){
        this.param='/';
    }

    async get(c){
        let sql='SELECT * FROM diary';
        let ret=await c.service.pgdb.query(sql);
        if(ret.rowCount<=0){
           c.res.body={
              status:-1,
               data:'无管理员信息！'
           };
        }else{c.res.body={status: 0, data:ret.rows }};
    }

    async delete(c){
      c.body=JSON.parse(c.body);
      let sql='delete from diary where did=$1';
      let ret=await c.service.pgdb.query(sql,[c.body.did]);
      if(ret.rowCount<=0){c.res.body={status:-1,data:'删除失败！'}}else(c.res.body={status:0,data:'删除成功！'})

    }
}

module.exports=login;
