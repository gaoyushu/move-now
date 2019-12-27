class concerns{
    constructor(){
        this.param='/:token'
    }

    async update(c){
        c.body=JSON.parse(c.body);

        //获取当前用户uid
        let sqla='SELECT uid FROM users WHERE token=$1';
        let reta=await c.service.pgdb.query(sqla,[
            c.param.token
        ]);
    
        //获取关注表中当前用户给某个用户是否关注的全部信息
        let sqlc='SELECT * FROM concerns'+' WHERE uid in(SELECT uid FROM users WHERE token=$1) and cuid=$2';
        let retc=await c.service.pgdb.query(sqlc,[
             c.param.token,c.body.cuid
        ]);
    
        //这里要增加的数除了被关注用户的粉丝数，还要增加当前用户的关注数
        //获取被关注用户粉丝数
        let sqld='SELECT ufans FROM users WHERE uid=$1';
        let retd=await c.service.pgdb.query(sqld,[
            c.body.cuid
        ]);
         
        let sqlg='SELECT uconcern FROM users WHERE uid=$1';
        let retg=await c.service.pgdb.query(sqlg,[
            reta.rows[0].uid
        ]);
     
        if(retc.rowCount<=0){
            //自动生成cid，时间
            let sqlcid='SELECT MAX(cid) FROM concerns';
            let retcid=await c.service.pgdb.query(sqlcid);
            var cid=retcid.rows[0].max+1 || 1;        
            let time=new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false});
    
            let sqlb='INSERT INTO concerns(uid,cuid,cid,ctime)'+' VALUES($1,$2,$3,$4)';
            let retb=await c.service.pgdb.query(sqlb,[
                reta.rows[0].uid,c.body.cuid,cid,time
            ]);
    
            var ufans=retd.rows[0].ufans+1;
            var uconcern=retg.rows[0].uconcern+1;
    
            let sqlf='UPDATE users SET ufans=$1 WHERE uid=$2';
            let retf=await c.service.pgdb.query(sqlf,[
                ufans,c.body.cuid
          ]);
            let sqlh='UPDATE users SET uconcern=$1 WHERE uid=$2';
            let reth=await c.service.pgdb.query(sqlh,[
                uconcern,reta.rows[0].uid
            ]);         
        }
        else{
            if(retc.rows[0].cstatus=='true'){
                let ufansone=retd.rows[0].ufans-1;
                let uconcernone=retg.rows[0].uconcern-1;
                let sqlnewa="UPDATE concerns SET cstatus='false'"+' WHERE uid='+reta.rows[0].uid+' and cuid=$1';
                let retnewa=await c.service.pgdb.query(sqlnewa,[
                    c.body.cuid
                ]);
                let sqlnewb='UPDATE users SET ufans=$1 WHERE uid=$2';
                let retnewb=await c.service.pgdb.query(sqlnewb,[
                    ufansone,c.body.cuid
                ]);
                let sqlnewc='UPDATE users SET uconcern=$1 WHERE uid=$2';
                let retnewc=await c.service.pgdb.query(sqlnewc,[
                    uconcernone,reta.rows[0].uid
                ]);
            }
            else if(retc.rows[0].cstatus=='false'){
                let ufanstwo=retd.rows[0].ufans+1;
                let uconcerntwo=retg.rows[0].uconcern+1;
                let sqlnewa="UPDATE concerns SET cstatus='true'"+' WHERE uid='+reta.rows[0].uid+' and cuid=$1';
                let retnewa=await c.service.pgdb.query(sqlnewa,[
                    c.body.cuid
                ]);
                let sqlnewb='UPDATE users SET ufans=$1 WHERE uid=$2';
                let retnewb=await c.service.pgdb.query(sqlnewb,[
                    ufanstwo,c.body.cuid
                ]);
    
                let sqlnewc='UPDATE users SET uconcern=$1 WHERE uid=$2';
                let retnewc=await c.service.pgdb.query(sqlnewc,[
                    uconcerntwo,reta.rows[0].uid
                ]);
            }
        }
        //无返回值
        if(retg.rowCount<=0 && retd.rowCount<=0 && reta.rowCount<=0){
           c.res.body={
               status:-1,
               errmsg:'failed'
           }
        }
        else{
           c.res.body={
               status:0,
               data:retc.rows[0]
           };
        }
    }
}

module.exports=concerns;
