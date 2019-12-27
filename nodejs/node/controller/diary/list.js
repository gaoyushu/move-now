class list{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let token = c.param.token;
        let sql = 'SELECT * FROM diary WHERE uid in(SELECT uid FROM users WHERE token=$1) ORDER BY dtime DESC';
        let ret = await c.service.pgdb.query(sql,[token]);
        
        if(ret.rowCount<=0){
            c.res.body={
             status:-1,
             data:'获取日记列表失败！'
            }
        }
        else{
            c.res.body={
             status:0,
             data:ret.rows
            };
        } 
    }
}

module.exports=list;