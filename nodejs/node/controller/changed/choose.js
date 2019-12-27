class choose{
    constructor(){
        this.param='/:token'
    }
    async get(c){
        let token=c.param.token;
        let sql='select * from diary where exchange=$1 and dtype=$3 and uid in(select uid from users where token=$2) order by dtime desc';
        let ret=await c.service.pgdb.query(sql,['false',token,'private']);
        let list=ret.rows;
      
        if(ret.rowCount<=0){
          c.res.body={
            status:-1,
            data:'您没有可选日记'
          }
        }else{
          for(let i=0;i<list.length;i++){
            list[i].token=null;
            list[i].upassword=null;
            list[i].uname=null;
            list[i].uemail=null;
          }
          c.res.body={
            status:0,
            data:list
          }
        }
    }
    async create(c){
      c.body=JSON.parse(c.body);
      let token=c.body.token;
      let oneid=c.body.oneid;
      let diaryid=c.body.diaryid;
    
      let sql='select * from users where token=$1';
      let ret=await c.service.pgdb.query(sql,[token]);
      let mine=ret.rows[0];
    
      // 判断相同申请
      // uid shortdes_id diaryid相同则返回错误
      sql='select * from exchange where uid=$1 and shortdes_id=$2 and edid=$3';
      ret=await c.service.pgdb.query(sql,[mine.uid,oneid,diaryid]);
      if(!ret.rowCount<=0){c.res.body={status:-1,data:'请勿重复申请！'};return -1};
    
      // 判断解锁
      // 如果对方有未解锁的 改变第一个未解锁的exchange的状态 自己的为可读 如果没有 自己的为不可读
      sql='select * from exchange where shortdes_id=$1' ;
      ret=await c.service.pgdb.query(sql,[oneid]) ;
      let ex=ret.rows;
      let estatus='false';
      for(var i=0;i<ex.length;i++) {
        if(ex[i].uid!=mine.uid && ex[i].estatus=='false'){
          estatus='true';
          sql='update exchange set estatus=$1 where eid=$2';
          ret=await c.service.pgdb.query(sql,['true',ex[i].eid]);
          break;
        }
      }
    
      // 插入申请表
      sql='select max(eid) from exchange';
      ret=await c.service.pgdb.query(sql);
      let eid=ret.rows[0].max || 0;
      let etime=new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false})
      sql='insert into exchange(eid,uid,shortdes_id,edid,estatus,etime) values($1,$2,$3,$4,$5,$6)';
      ret=await c.service.pgdb.query(sql,[eid+1,mine.uid,oneid,diaryid,estatus,etime]);
      
      if(ret.rowCount<=0){
        c.res.body={status:-1,data:'申请失败！'}
      }else{
        c.res.body={status:0,data:'申请成功！'}
      }
    }

}

module.exports=choose;
