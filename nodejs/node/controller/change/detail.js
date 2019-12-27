class detail{
    constructor(){
        this.param='/:oneid/:token'
    }

    async get(c){
        let sql = 'select * from describe,users where describe.uid=users.uid and shortdes_id=$1';
        let ret = await c.service.pgdb.query(sql,[c.param.oneid]);
        let diary = ret.rows[0];
      
        sql = 'select * from users where token=$1'; 
        ret = await c.service.pgdb.query(sql,[c.param.token]);
        if(ret.rows[0].uid==diary.uid){diary.isMe=true}else{diary.isMe=false};
      
        let uid = ret.rows[0].uid;
        sql = 'select * from apply where shortdes_id=$1 and uid=$2';
        ret = await c.service.pgdb.query(sql,[c.param.oneid, uid]);
        if(ret.rowCount<=0){diary.isRequest=false}else{diary.isRequest=true};
      
        if(!diary){
            c.res.body={
             status:-1,
             data:'一句话详情获取失败！'
            }
        }
        else{
            c.res.body={
             status:0,
             data:diary
            };
        }
    }
}

module.exports=detail;