class comment{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let sql='SELECT comments.comid,comments.comtime,comments.comcontent,comments.comstatus,diary.did,diary.dtime,diary.dtitle,diary.dcontent,diary.dtype,diary.dpraise,diary.comments,diary.exchange,diary.dimage,users.uid,users.uname,users.uintroduce,users.uimage,users.ustatus FROM diary,comments,users WHERE comments.uid=users.uid and diary.did=comments.did and diary.did IN(SELECT did FROM diary WHERE uid IN(SELECT uid FROM users WHERE token=$1)) ORDER BY comments.comtime DESC'
        let ret=await c.service.pgdb.query(sql,[c.param.token]);
    
        if(ret.rowCount<=0){
            c.res.body={
                status:-1,
                data:'您没有评论消息！'
            }
        }else{
            c.res.body={
                status:0,
                data:ret.rows
            }
        }
    }
}

module.exports=comment;
