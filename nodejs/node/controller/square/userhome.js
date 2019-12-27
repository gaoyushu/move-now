class userhome{
    constructor(){
        this.param='/:token/:userid'
    }

    async get(c){
    // 获取用户信息
    let sql='SELECT * FROM users WHERE token=$1';
    let ret=await c.service.pgdb.query(sql,[c.param.token]);
    let mine=ret.rows[0];
    let user;

    // 判断关注状态 myself/false/true 字符串
    if(mine.uid==c.param.userid){
        user=mine;
        user.isFollow='myself';
    }else{
        sql='SELECT * FROM users WHERE uid=$1';
        ret=await c.service.pgdb.query(sql,[c.param.userid]);
        user=ret.rows[0];
     
	sql='SELECT * FROM concerns WHERE uid=$1 and cuid=$2';
	ret=await c.service.pgdb.query(sql,[mine.uid,c.param.userid]);
        user.isFollow=ret.rowCount<=0?'false':ret.rows[0].cstatus;
    }  

    // 获取日记 获取点赞状态 false/true boolean
    sql='SELECT * FROM diary WHERE uid=$1 and dtype=$2 ORDER BY dtime DESC';
    ret=await c.service.pgdb.query(sql,[c.param.userid,'public'])||{};
    if(ret.rowCount<=0){
      user.diary='当前用户没有日记！'
    }else{
      user.diary=ret.rows;
      for(let i=0;i<user.diary.length;i++){
        sql='select * from praise where uid=$1 and did=$2';
        ret=await c.service.pgdb.query(sql,[mine.uid,user.diary[i].did]);
        user.diary[i].pstatus=ret.rowCount<=0?false:ret.rows[0].pstatus;
      }
    }

    user.upassword=null;
    user.token=null;
    user.uemail=null;

    if(!user){
        c.res.body={
         status:-1,
         data:'用户主页获取失败，后端错误，请联系管理员！'
        }
    }
    else{
        c.res.body={
         status:0,
         data:user
        };
    }
    }
}

module.exports=userhome
