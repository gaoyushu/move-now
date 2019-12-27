class login{
    constructor(){
        this.param='/';
    }

    async create(c){
        c.body=JSON.parse(c.body);

        let sql='SELECT * FROM administrator WHERE username=$1 and password=$2';
        let ret=await c.service.pgdb.query(sql,[
            c.body.username,c.body.password
        ]);
        if(ret.rowCount<=0){
           c.res.body={
              status:-1,
               data:'用户名或密码错误！'
           };
        }else{c.res.body={status: 0, data: '登录成功！'}};
    }
}

module.exports=login;
