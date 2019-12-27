class comments{
    constructor(){
        this.param='/:token'
    }
    async create(c){
        c.body=JSON.parse(c.body);
        //console.log(c.body);
        let sqla='SELECT max(comid) from comments';
        let reta=await c.service.pgdb.query(sqla);
        let id=reta.rows[0].max+1 || 1;
        let time=new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false})
       
        let sqlb='SELECT uid FROM users WHERE token=$1';
        let retb=await c.service.pgdb.query(sqlb,[
          c.body.token
        ]);
        let sql='INSERT INTO comments(comid,did,uid,comtime,comcontent,comstatus)'+'VALUES($1,$2,$3,$4,$5,$6)';
        let ret=await c.service.pgdb.query(sql,[
            id,c.body.did,retb.rows[0].uid,time,c.body.comcontent,c.body.comstatus
        ]);
          
    
        let sqlc='UPDATE diary SET comments=comments+1 WHERE did=$1';
        let retc=await c.service.pgdb.query(sqlc,[
            c.body.did
        ]);
        if(ret.rowCount<=0){
            c.res.body={
                status:-1,
                errmsg:'failed'
            };
        }
        else{
            c.res.body={
                status:0,
                data:'ok'
            };
        }
    }
}

module.exports=comments;
