class good{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let sql='SELECT praise.pid,praise.pstatus,praise.ptime,diary.did,diary.dtime,diary.dtitle,diary.dcontent,diary.dtype,diary.dpraise,diary.comments,diary.exchange,diary.dimage,users.uid,users.uname,users.uintroduce,users.uimage,users.ustatus FROM diary,praise,users WHERE praise.uid=users.uid and diary.did=praise.did and praise.pstatus=$2 and diary.did in(SELECT did FROM diary WHERE uid IN(SELECT uid FROM users WHERE token=$1)) ORDER BY praise.ptime DESC'
        let ret=await c.service.pgdb.query(sql,[c.param.token,'true']);
        if(ret.rowCount<=0){
            c.res.body={
                status:-1,
               data:'您没有点赞消息！'
            }
        }else{
            c.res.body={
            status:0,
            data:ret.rows
        }
        }
    }
}

module.exports=good;