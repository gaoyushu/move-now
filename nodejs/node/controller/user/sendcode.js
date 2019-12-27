const send=require('../../function/mail');

class sendcode{
    constructor(){
        this.param='/';
    }

    async create(c){
        c.body = JSON.parse(c.body);
        var address = c.body.mail;
    
        // 判断邮箱格式
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!reg.test(address)){
            c.res.body={status:-1, data:'邮箱格式错误！'};
            return -1;
        }
    
        // 判断相同邮箱
        var sql='SELECT * FROM users WHERE uemail=$1'
        var ret=await c.service.pgdb.query(sql, [address]);
        if(!ret.rowCount<=0){c.res.body={status:-1, data:'该邮箱已经注册'};console.log(ret.rows[0]);return -1}
    
        // 生成验证码
        var code = Math.floor(Math.random()*1000000);
    
        // 生成用户id
        sql='SELECT MAX(uid) FROM users';
        ret=await c.service.pgdb.query(sql);
        if(ret.rowCount<=0){c.res.body={status:-1, data:'用户id生成错误，服务器错误，请联系管理员'};return -1;}
        var userid = ret.rows[0].max+1 || 1;
    
        // 存入数据库
        sql='INSERT INTO users(uid, uemail, ucode, ustatus) VALUES ($1,$2,$3,$4)';
        ret=await c.service.pgdb.query(sql,[userid, address, code, -1]);
        if(ret.rowCount<=0){c.res.body={status:-1, data:'存入新用户错误，服务器错误，请联系管理员！'};return -1};
    
        // 发送邮件
        var mail = {
            from: '朝花夕拾 <1062945371@qq.com>',
            subject: '验证您的电子邮件地址',
            to: address,
            text: '您的验证码为: '+ code +' 【朝花夕拾】'
        }
        
        var rest=await send(mail);
        if(rest){
            c.res.body={status:-1, data:'验证码发送失败！'}
        }else{
            c.res.body={status:0, data:'验证码发送成功！'}
        };
    }
}

module.exports=sendcode
