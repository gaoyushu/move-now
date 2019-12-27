class mine{
    constructor(){
        this.param='/:token'
    }

    async get(c){
        let token=c.param.token;

        let sqla='SELECT * FROM users WHERE token=$1';
        let reta=await c.service.pgdb.query(sqla,[token]);
    
        let sqlb='SELECT count(cuid) FROM concerns WHERE uid in(SELECT uid FROM users WHERE token=$1)';
        let retb=await c.service.pgdb.query(sqlb,[token]);
        
        let sqlc='SELECT count(*) FROM concerns WHERE cuid in(SELECT uid FROM users WHERE token=$1)';
        let retc=await c.service.pgdb.query(sqlc,[token]);
    
        let sqld='SELECT count(*) FROM friends WHERE uid in(SELECT uid FROM users WHERE token=$1) or fuid in(SELECT uid FROM users WHERE token=$1)';
        let retd=await c.service.pgdb.query(sqld,[token])
      
    
    
        if(reta.rowCount<=0 && retb.rowCount<=0 && retc.rowCount<=0 && retd.rowCount<=0){
            c.res.body={
                status:-1,
                errmsg:'access failed' 
            }
        }
        else{
            c.res.body={
                status:0,
                dataone:reta.rows[0],
                datatwo:retb.rows[0].count ||0,
                datathree:retc.rows[0].count ||0,
                datafour:retd.rows[0].count||0
            };	
        }
    }

    async create(c){
        c.body=JSON.parse(c.body);
  	let token=c.body.token;
	let imgid=c.body.imgid;
	let sql='update users set uimage=$1 where token=$2';
        let rec=await c.service.pgdb.query(sql,[imgid,token]);
        if(rec.rowCount<=0){c.res.body={status:-1,data:'修改失败！'};return -1}else{c.res.body={status:0,data:'修改成功！',imgid:imgid}};

    }
}

module.exports=mine;
