class add{
    constructor(){
        this.param='/'
    }

    async create(c){
        c.body = JSON.parse(c.body);
        let token=c.body.token;
        let title=c.body.title;
        let content=c.body.content;
        let imgid=c.body.imgid;        

        let sql = 'select max(did) from diary';
        let ret = await c.service.pgdb.query(sql);
        let id = ret.rows[0].max+1 || 1;
    
        let time = new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false})
    
        sql='select * from users where token=$1';
        ret=await c.service.pgdb.query(sql,[token]);
        let uid=ret.rows[0].uid;
    
        sql='insert into diary(did,uid,dtime,dtitle,dcontent,dimage) values($1,$2,$3,$4,$5,$6)';
        ret=await c.service.pgdb.query(sql,[id,uid,time,title,content,imgid]);

        if(ret.rowCount<=0){
            c.res.body={
              status:-1,
              data:'创建日记失败！'
            };
        }
         else{
            c.res.body={
              status:0,
              data:id
            };
         }
    }

    async update(c){
      c.body = JSON.parse(c.body);
      let title=c.body.title;
      let content=c.body.content;
      let diaryid=c.body.diaryid;
      let imgid=c.body.imgid;

      let sql='UPDATE diary SET dtitle=$1, dcontent=$2,dimage=$4 WHERE did=$3';
      let ret=await c.service.pgdb.query(sql,[title,content,diaryid,imgid]);

      if(ret.rowCount<=0){
        c.res.body={
          status:-1,
          data:'编辑日记失败！'
        };
      }
      else{
        c.res.body={
          status:0,
          data:'编辑日记成功'
        };
      }
    }
        
}

module.exports=add;
