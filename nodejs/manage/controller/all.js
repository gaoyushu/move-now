class login{
    constructor(){
        this.param='/';
    }

    async get(c){
      let sql='select count(uid) from users where ustatus=1';
      let ret=await c.service.pgdb.query(sql);
      let dataone=ret.rows[0].count || 0;
      sql='select count(uid) from users';
      ret=await c.service.pgdb.query(sql);
      let datatwo=ret.rows[0].count||0;
      sql='select count(did) from diary';
      ret=await c.service.pgdb.query(sql);
      let datathree=ret.rows[0].count||0;
      sql='select count(shortdes_id) from describe';
      ret=await c.service.pgdb.query(sql);
      let datafour=ret.rows[0].count||0;
      sql='select count(shortdes_id) from describe where dstatus!=$1';
      ret=await c.service.pgdb.query(sql,['true']);
      let datafive=ret.rows[0].count||0;
      c.res.body={dataone:dataone,datatwo:datatwo,datathree:datathree,datafour:datafour,datafive:datafive};
    }
}

module.exports=login;
