class mine{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let token=c.param.token;
        let list={};
      
        let sql='SELECT * FROM describe WHERE dstatus=$2 AND uid IN(SELECT uid FROM users WHERE token=$1) ORDER BY dtime DESC';
        let ret=await c.service.pgdb.query(sql,[token,'true']);
        if(!ret.rowCount<=0){list.open=ret.rows}else{list.open='正在进行的一句话为空！'};
      
        sql='SELECT * FROM describe WHERE dstatus!=$2 AND uid IN(SELECT uid FROM users WHERE token=$1) ORDER BY dtime DESC';
        ret=await c.service.pgdb.query(sql,[token,'true']);
        if(!ret.rowCount<=0){list.close=ret.rows}else{list.close='已经关闭的一句话为空！'};
      
        c.res.body={
          status:0,
          data:list
        }
    }
}

module.exports=mine;