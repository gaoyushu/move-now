class detail{
    constructor(){
        this.param='/:token/:oneid'
    }

    async get(c){
        let token=c.param.token;
        let oneid=c.param.oneid;
      
        let sql='select * from users where token=$1';
        let ret=await c.service.pgdb.query(sql,[token]);
        let mine=ret.rows[0];

        sql='select * from describe where shortdes_id=$1';
        ret=await c.service.pgdb.query(sql,[oneid]);
        let one=ret.rows[0];

      
        sql='select * from exchange,diary where exchange.edid=diary.did and shortdes_id=$1 order by etime';
      
        ret=await c.service.pgdb.query(sql,[oneid]);
        let exchange=ret.rows;

      
        sql='select * from apply where atype=$1 and shortdes_id=$2 order by atime';
        ret=await c.service.pgdb.query(sql,['friend',oneid]);
        let friend=ret.rows;

      
        let chat=[];
        
        for(let i=0;i<exchange.length;i++){
          let json={};
          json.type='exchange';
          json.isRead=exchange[i].estatus;
          json.diaryid=exchange[i].did;
          json.title=exchange[i].dtitle;
          json.time=exchange[i].etime;
          json.eid=exchange[i].eid;
          json.isMe=mine.uid==exchange[i].uid?'true':'false';
          chat.push(json);
        }
        
        if(friend){
          for(let i=0;i<friend.length;i++){
                let json={};
              json.aid=friend[i].aid;
                json.type='friend';
                json.isReply=friend[i].astatus==0?false:true;
                if(json.isReply){json.reply=friend[i].astatus>0?true:false};
                json.content=friend[i].acontent;
                json.time=friend[i].atime;
                json.isMe=friend[i].uid==mine.uid?'true':'false';
             chat.map((item,idx)=>{
             if(friend[i].atime<item.etime){
            chat.splice(idx,0,json)
              }else if(idx==chat.length-1){
            chat.push(json);
              }
            })
          }
        }
      
        if(chat){
          c.res.body={
            status:0,
            data:chat
          }
        }else{
          c.res.body={
            status:-1,
            data:'获取失败！'
          }
        }
      
    }
}

module.exports=detail;