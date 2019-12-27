class register{
    constructor(){
        this.param='/'
    }

    async create(c){
        c.body = JSON.parse(c.body);
        var mail = c.body.mail;
        var code = c.body.code;
        var password = c.body.password;
        var repassword = c.body.repassword;
    
        // 判断验证码
        var sql='SELECT * FROM users WHERE uemail=$1';
        var ret=await c.service.pgdb.query(sql,[mail]);
        if(!ret.rowCount){
            c.res.body={status:-1, data:'邮箱不存在！'};return -1
        }else if(ret.rows[0].ucode != code){
            c.res.body={status:-1, data:'验证码错误！'};return -1
        };
    
        // 判断密码合法性
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(!reg.test(password)){c.res.body={status:-1, data:'密码格式错误!'};return -1}
       
        // 判断两次密码
        if(password!=repassword){c.res.body={status:-1, data:'两次密码不一致！'};return -1}
     
        // 存入新用户信息
        var userid=ret.rows[0].uid;
        sql='UPDATE users SET upassword=$1,ustatus=$2 WHERE uid=$3';
        ret=await c.service.pgdb.query(sql,[password,0,userid]);
        if(ret.rowCount<=0){
            c.res.body={status:-1, data:'存入用户错误，服务器错误，请联系管理员！'}
        }else{
            c.res.body={status:0, data:'注册成功！'}
        };
    }
}

module.exports=register
