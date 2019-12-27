class exchange{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let token=c.param.token;

        // 自己发布的
        let sql='SELECT * FROM describe WHERE dstatus!=$2 and uid IN(SELECT uid FROM users WHERE token=$1)';
        let ret=await c.service.pgdb.query(sql,[token,'true']);
        let num=ret.rowCount;
        let list=ret.rows || [];

        // 自己申请的 
        // astatus=1 atype='exchange' 得到shortdes_id
        sql='SELECT * FROM apply,describe WHERE apply.aid=describe.aid and astatus=$2 and atype=$3 and apply.uid IN(SELECT uid FROM users WHERE token=$1)'
        ret=await c.service.pgdb.query(sql,[token, 1,'exchange']);
        list.push(...ret.rows);
        
        if((num+ret.rowCount)<=0){
            c.res.body={
                status:-1,
                data:'匿名列表为空或获取好友失败，后端错误，请联系管理员！'
            }
        }else{
            c.res.body={
                status:0,
                data:list
            };
        }
    }
}

module.exports=exchange
