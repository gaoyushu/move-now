class login{
    constructor(){
        this.param='/';
    }

    async create(c){
        c.body=JSON.parse(c.body);

        let sql='SELECT * FROM users WHERE uemail=$1 and upassword=$2';
        let ret=await c.service.pgdb.query(sql,[
            c.body.mail,c.body.password
        ]);
        if(ret.rowCount<=0){
           c.res.body={
              status:-1,
               data:'邮箱或密码错误！'
           };
           return -1;
        }
       
        let token = Date.now();
        sql='UPDATE users SET token=$1,ustatus=1 WHERE uemail=$2';
        ret=await c.service.pgdb.query(sql, [token, c.body.mail]);
        if(ret.rowCount<=0){c.res.body={status: -1, data:'token值存储失败，服务端错误，请联系管理员'}
        }else{c.res.body={token:token,status: 0, data: '登录成功！'}};
    }
}

module.exports=login;
