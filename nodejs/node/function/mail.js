const nodemailer = require('nodemailer');

var config = {
    host: 'smtp.qq.com', 
    port: 465,
    auth: {
        user: '1062945371@qq.com', //刚才注册的邮箱账号
        pass: 'alqjcihgpzgnbfef'  //邮箱的授权码，不是注册时的密码
    }
};

var transporter = nodemailer.createTransport(config);

module.exports = function (mail){
    transporter.sendMail(mail, function(error, info){
        if(error) {
            return error;
        }
        console.log('mail sent:', info.response);
    });
};
