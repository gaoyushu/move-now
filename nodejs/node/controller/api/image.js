const fs = require('../../function/file');

class image{
    constructor(){
        this.param='/:imgid';
    }

    async get(c){
        let imgid=c.param.imgid||63;
        let sql='select * from images where iid=$1';
        let ret=await c.service.pgdb.query(sql,[imgid]);
        if(ret.rowCount<=0){c.res.body={status:-1,data:'图片请求错误！'};return -1};
        let image=ret.rows[0];  
        // 读取文件
        try{
            c.setHeader('Content-Type','image/'+image.itype);
            c.res.encoding='binary';
            c.res.body=await fs.readFile(image.isrc,'binary');
        }catch(err){
            console.log(err);
            c.res.body={status:-1,data:'获取图片失败！'}
        }
    }

    async create (c) {
        try {
          let f = c.getFile('image');
          let extname = c.helper.extName(f.filename);
          let ret = await c.moveFile(f, {
            path : c.service.imagepath,
          });
console.log(ret);
          c.res.body = ret;
        
	let sql='select max(iid) from images';
        let rec=await c.service.pgdb.query(sql);
        let id=rec.rows[0].max+1 || 1;
       // let src=c.service.imagepath+'/'+f.filename;
        let type=extname.split('.')[1];
let src=ret.target;
        sql='insert into images(iid,isrc,itype) values($1,$2,$3)';
        rec=await c.service.pgdb.query(sql,[id,src,type]);
	if(rec.rowCount<=0){c.res.body={status:-1,data:'上传失败！'};return -1}else{c.res.body={status:0,data:'上传成功！',imageid:id}};
	

        } catch (err) {
	  console.log(err);
          c.res.body = err.message;
        }
    }
}

module.exports=image;
