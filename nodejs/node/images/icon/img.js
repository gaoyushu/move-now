const pg=require('pg');

var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'niuyuxin',
    password:'111111',
    database:'niuyuxin'
});

let arr=
['icon_11.png',
'icon_logo.png',
'icon_交换.png',
'icon_图片.png',
'icon_密码.png',
'icon_折线.png',
'icon_搜索.png',
'icon_用户1.png',
'icon_用户.png',
'icon_用户名.png',
'icon_记录.png',
'icon_设置.png',
'icon_话题.png',
'icon_通知.png',
'icon_邮箱.png'
]


arr.map((item,idx)=>{
console.log(item);
  let path='/home/niuyuxin/zhaohuaxishi/node/images/icon/';
  let ext=item.split('.')[1];
console.log(ext);
  pgdb.query('insert into images values($1,$2,$3)',[idx+91,path+item,ext]);
})

