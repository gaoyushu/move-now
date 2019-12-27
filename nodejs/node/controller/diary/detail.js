class detail{
    constructor(){
        this.param='/:diaryid/:token';
    }

    async get(c){
        let diaryid=c.param.diaryid;
        let token=c.param.token;

        let sql = 'select * from diary,users where diary.uid=users.uid and did=$1';
        let ret = await c.service.pgdb.query(sql,[diaryid]);
        let diary = ret.rows[0];
    
        sql = 'select * from users where token=$1';
        ret =  await c.service.pgdb.query(sql,[token]);
        if(ret.rows[0].uid==diary.uid){diary.isMe=true}else{diary.isMe=false};
    
        let uid = ret.rows[0].uid;
        sql = 'select * from praise where uid=$1 and did=$2';
        ret = await c.service.pgdb.query(sql,[uid,diaryid]);
        ret.rowCount<=0?diary.isGood=false:diary.isGood=ret.rows[0].pstatus;
    
        sql = 'select * from comments,users where comments.uid=users.uid and did=$1 order by comtime desc';
        ret = await c.service.pgdb.query(sql,[diaryid]);
        ret.rowCount<=0?diary.comments='暂无评论':diary.comments=ret.rows;
    
        if(!diary){
            c.res.body={
             status:-1,
             data:'日记详情获取失败！'
            }
        }
        else{
            c.res.body={
             status:0,
             data:diary
            };
        }
    }
}

module.exports=detail;
