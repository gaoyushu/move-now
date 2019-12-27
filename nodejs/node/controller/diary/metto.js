class metto{
    constructor(){
      this.param='/';	
    }

    async get(c){
        let sql='SELECT * FROM metto ORDER BY mid desc limit 1';
        let ret=await c.service.pgdb.query(sql);
        
        if(ret.rowCount<=0){
            c.res.body={
            status:-1,
            data:'无法获取一日一文！'
            }
        }
        else{
            c.res.body={
            status:0,
            data:ret.rows[0]
            };
        }
    }
}

module.exports = metto;
