class exchange{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let sql='SELECT describe.shortdes_id,describe.shortdes,describe.longdes,describe.dstatus,describe.dtime,apply.aid,apply.astatus,apply.acontent,apply.atype,apply.atime,users.uid,users.uname,users.uintroduce,users.uimage,users.ustatus FROM describe,apply,users WHERE apply.uid=users.uid and apply.shortdes_id=describe.shortdes_id and apply.atype=$1 and describe.shortdes_id in(SELECT shortdes_id FROM describe WHERE uid IN(SELECT uid FROM users WHERE token=$2)) ORDER BY apply.atime DESC'
        let ret=await c.service.pgdb.query(sql,['exchange',c.param.token]);
        if(ret.rowCount<=0){
            c.res.body={
                status:-1,
                data:'您没有申请！'
            }
        }else{
            c.res.body={
                status:0,
                data:ret.rows
            }
        }
    }
}

module.exports=exchange;