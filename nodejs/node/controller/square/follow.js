class follow{
    constructor(){
        this.param='/:token'
    }
    async get(c){
        let sqla="SELECT * FROM users,diary"+" WHERE users.uid=diary.uid and diary.dtype='public' and diary.uid in(SELECT cuid FROM concerns WHERE uid in(SELECT uid from users WHERE token=$1) and cstatus='true')";
        // console.log(ret.row);
         let reta=await c.service.pgdb.query(sqla,[
             c.param.token
         ]);
         let diary=reta.rows;
         for(var i=0;i<diary.length;i++){
              let sql='SELECT pstatus FROM praise WHERE uid in(SELECT uid FROM users WHERE token=$1) and did='+"'"+diary[i].did+"'";
          let ret=await c.service.pgdb.query(sql,[c.param.token]);
              if(ret.rowCount<=0){
                  console.log('a');
              //diary[i].pstatus=ret.rows[i].pstatus;
                  diary[i].pstatus='false';
             }
          else{
                 // diary[i].pstatus='false';
                  diary[i].pstatus=ret.rows[0].pstatus;
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

module.exports=follow;