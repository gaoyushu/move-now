class mine{
    constructor(){
        this.param='/'
    }

    async update(c){
        c.body=JSON.parse(c.body);
        console.log(c.body);
        let sql='UPDATE users SET uname=$1,uintroduce=$2 WHERE token=$3';
        let ret = await c.service.pgdb.query(sql,[
            c.body.uname,c.body.uintroduce,c.body.token
        ]);
        if(ret.rowCount<=0){
            c.res.body={
   		status:-1,
	        errmsg:'failed'
            }  
        }else{
            c.res.body={
                status:0,
                data:'ok'
            }
        }
    }
}

module.exports=mine;
