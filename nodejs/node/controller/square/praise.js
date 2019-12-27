class praise{
    constructor(){
        this.param='/:token/:did'
    }

    async update(c){
        let sqlone='SELECT * FROM praise WHERE did=$1 and uid in(SELECT uid FROM users WHERE token=$2)';
        let retone=await c.service.pgdb.query(sqlone,[
            c.param.did,c.param.token
        ]);
    
        let sqltwo='SELECT uid FROM users WHERE token=$1';
        let rettwo=await c.service.pgdb.query(sqltwo,[
            c.param.token
        ])
    
        
        let sqlfive='SELECT dpraise FROM diary WHERE did=$1';
        let retfive=await c.service.pgdb.query(sqlfive,[
            c.param.did
        ]);
        
        if(retone.rowCount<=0){
            let sqlthree='SELECT MAX(pid) FROM praise';
            let retthree=await c.service.pgdb.query(sqlthree);
            var pid=retthree.rows[0].max+1 || 1;
       
            let time=new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString('chinese',{hour12:false})
            let sqlfour='INSERT INTO praise(pid,uid,did,ptime)'+' VALUES($1,$2,$3,$4)';
            let rettfour=await c.service.pgdb.query(sqlfour,[
                 pid,rettwo.rows[0].uid,c.param.did,time
            ]);
    
    
            var dpraise=retfive.rows[0].dpraise+1;
    
            let sqlsix='UPDATE diary SET dpraise=$1 WHERE did=$2';
            let retsix=await c.service.pgdb.query(sqlsix,[
                dpraise,c.param.did
            ]);
        }
        else{
            if(retone.rows[0].pstatus=='true'){
                let dpraiseone=retfive.rows[0].dpraise-1;
                let sqlnewa="UPDATE praise SET pstatus='false'"+' WHERE uid='+rettwo.rows[0].uid+' and did=$1';
              let retnewa=await c.service.pgdb.query(sqlnewa,[
            c.param.did
                ]);	
            let sqlnewb='UPDATE diary SET dpraise=$1 WHERE did=$2';
            let retnewb=await c.service.pgdb.query(sqlnewb,[
                    dpraiseone,c.param.did
                ]);
            }
            else if(retone.rows[0].pstatus=='false'){
                let dpraisetwo=retfive.rows[0].dpraise+1;
                let sqlnewa="UPDATE praise SET pstatus='true'"+' WHERE uid='+rettwo.rows[0].uid+' and did=$1';
                let retnewa=await c.service.pgdb.query(sqlnewa,[c.param.did]) ;
            let sqlnewb='UPDATE diary SET dpraise=$1 WHERE did=$2';
            let retnewb=await c.service.pgdb.query(sqlnewb,[
                    dpraisetwo,c.param.did
                ]);
            }
        }
        if(rettwo.rowCount<=0 && retfive.rowCount<=0){
            c.res.body={
              status:-1,
          errmsg:'update failed'
            }
        }
        else{
          c.res.body={
            status:0,
            data:'ok'
          };
        }
    }
}

module.exports=praise;
