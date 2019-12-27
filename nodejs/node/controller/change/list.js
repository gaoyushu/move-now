class list{
    constructor(){
        this.param='/'
    }
    async get(c){
        let sql='SELECT * FROM describe WHERE dstatus=$1 ORDER BY dtime DESC';
        let ret=await c.service.pgdb.query(sql,['true']);
    
        if(ret.rowCount<=0){
            c.res.body={
                status:-1,
                data:'没有一句话或获取最新一句话失败！'
            }
            }else{
            c.res.body={
                status:0,
                data:ret.rows
            }
        }
    }
}

module.exports=list;