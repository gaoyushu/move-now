class friends{
    constructor(){
        this.param = '/:token'
    }

    async get(c){
        let token=c.param.token;
        // 我申请的好友 我是uid
        let sql='SELECT * FROM users,friends WHERE users.uid=friends.fuid and friends.uid IN(SELECT uid FROM users WHERE token=$1)';
        let ret=await c.service.pgdb.query(sql,[token]);
        let num=ret.rowCount;
        let list = ret.rows || [];
        
	// 我通过的好友 我是fuid
        sql='SELECT * FROM users,friends WHERE users.uid=friends.uid and friends.fuid in (SELECT uid FROM users WHERE token=$1)'
        ret = await c.service.pgdb.query(sql,[token]);
        
  	// 让好友都是fuid 我是uid
        let t;
        for(let i = 0; i < ret.rows.length; i++){
            t = ret.rows[i].fuid;
            ret.rows[i].fuid = ret.rows[i].uid;
            ret.rows[i].uid = t;
        };
        list.push(...ret.rows);
        if((num+ret.rowCount)<=0){
            c.res.body={
            status:-1,
            data:'好友列表为空或获取好友失败，后端错误，请联系管理员！'
            }
        }
        else{
            c.res.body={
            status:0,
            data:list
            };
        }
    }
}

module.exports=friends
