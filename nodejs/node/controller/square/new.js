class newlist{
    constructor(){
        this.param='/:token'
    }
    async get(c){
        let sqla="SELECT * FROM users,diary WHERE users.uid=diary.uid and dtype='public' order by dtime desc";
        let reta=await c.service.pgdb.query(sqla);
        let diary=reta.rows;
        for(var i=0;i<diary.length;i++){
            let sql='SELECT pstatus FROM praise WHERE uid in(SELECT uid FROM users WHERE token=$1) and did='+"'"+diary[i].did+"'";
        let ret=await c.service.pgdb.query(sql,[c.param.token]);
            if(!ret.rowCount<=0){
            diary[i].pstatus=ret.rows[0].pstatus;
           }
        else{
                diary[i].pstatus='false';
            }
        }  
        
        if(reta.rowCount <=0){
            c.res.body={
              status:-1,
              errmsg:'failed get users'
            };
        }else{
            c.res.body={
                status:0,
                data:diary
            }
        }
    }
}

module.exports=newlist;