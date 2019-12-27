const pg=require('pg');

var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'niuyuxin',
    password:'111111',
    database:'niuyuxin'
});

let arr = [
    "icon_back1.png",
    "icon_back.jpg",
    "icon_bold.png",
    "icon_logo1.jpg",
    "icon_logo.jpg",
    "icon_logo.png",
    "icon_my.png",
    "icon_save.png",
    "icon_touxiang.jpg",
    "icon_下划线.png",
    "icon_两个人.png",
    "icon_个人信息.png",
    "icon_主页.jpg",
    "icon_主页.png",
    "icon_云端1.png",
    "icon_云端.png",
    "icon_交换1.png",
    "icon_交换.png",
    "icon_倾斜.png",
    "icon_关注1.png",
    "icon_关注.png",
    "icon_删除.png",
    "icon_删除线.png",
    "icon_刷新1.png",
    "icon_刷新.png",
    "icon_加号1.png",
    "icon_加号.png",
    "icon_加好友.png",
    "icon_密码.png",
    "icon_广场1.png",
    "icon_广场.png",
    "icon_开锁.png",
    "icon_我的1.png",
    "icon_我的2.png",
    "icon_我的.png",
    "icon_日记1.png",
    "icon_日记.png",
    "icon_消息.png",
    "icon_眼睛1.png",
    "icon_眼睛2.png",
    "icon_绿叶1.png",
    "icon_绿叶.png",
    "icon_解锁.png",
    "icon_设置.png",
    "icon_评论.png",
    "icon_邮箱.png",
    "icon_链接.png",
    "icon_锁.png",
    "icon_页面.png",
    "icon_验证.png"
]
arr.map((item,idx)=>{
console.log(item);
  let ext=item.split('.')[1];
console.log(ext);
  pgdb.query('insert into images values($1,$2,$3)',[idx+4,'./icon/'+item,ext]);
})
