class type{
    constructor(){
        this.param='/:diaryid'
    }
    
    async update(c){
        let diaryid=c.param.diaryid;

        let sql = 'SELECT * FROM diary WHERE did=$1';
        let ret = await c.service.pgdb.query(sql,[c.param.diaryid]);
        
        let type = ret.rows[0].dtype;
        type=type=='public'?'private':'public';
        
        sql = 'UPDATE diary set dtype=$1 where did=$2'
        ret = await c.service.pgdb.query(sql,[type,diaryid]);

        if(ret.rowCount<=0){
            c.res.body={
             status:-1,
             errmsg:'更改日记状态失败！'
            }
        }
        else{
            c.res.body={
             status:0,
             data:'更改日记成功'
            };
        }
    }
}

module.exports=type;