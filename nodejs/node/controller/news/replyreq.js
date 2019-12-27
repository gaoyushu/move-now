class replyreq{
    constructor(){
        this.param='/'
    }

    async update(c){
        c.body=JSON.parse(c.body);
        let aid=c.body.aid;
        let reply=c.body.reply;
        
        // 得到apply
        let sql='select * from apply where aid=$1';
        let ret=await c.service.pgdb.query(sql,[aid]);
        let apply=ret.rows[0];
        
        // 得到one
        sql='select * from describe where shortdes_id=$1';
        ret=await c.service.pgdb.query(sql,[apply.shortdes_id]);
        let one=ret.rows[0];
      
        // 改变apply状态
        sql='update apply set astatus=$1 where aid=$2';
        ret=await c.service.pgdb.query(sql,[reply,aid]);
        
        if(reply>0){
          // 改变diary
          sql='update diary set exchange=$1 where did=$2';
          ret=await c.service.pgdb.query(sql,['true',apply.did]);
          // 改变describe
          sql='update describe set ddid=$1,aid=$2,dstatus=$4 where shortdes_id=$3';
          ret=await c.service.pgdb.query(sql,[apply.did,aid,apply.shortdes_id,'false']);
          // 新增交换
          sql='select max(eid) from exchange';
          ret=await c.service.pgdb.query(sql);
          let eid=ret.rows[0].max+1 || 1;
          let etime=new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false})

          sql='insert into exchange(eid,uid,shortdes_id,edid,estatus,etime) values($1,$2,$3,$4,$5,$6)';
          ret=await c.service.pgdb.query(sql,[eid,apply.uid,apply.shortdes_id,apply.did,'true',etime]);
          ret=await c.service.pgdb.query(sql,[eid+1,one.uid,apply.shortdes_id,one.did,'true',etime]);   
        }
        if(ret.rowCount>0){  
        c.res.body={
          status:0,
          data:'回复成功！'
        }}else{c.res.body={status:-1,data:'回复失败！'}}
    }
}

module.exports=replyreq;
