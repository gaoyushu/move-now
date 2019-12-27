const titbit = require('titbit');
const titloader = require('titbit-loader');
const pg = require('pg');

var app = new titbit ();

var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'niuyuxin',
    password:'111111',
    database:'niuyuxin'
});

app.service.pgdb=pgdb;
// 同源访问
app.use(async (c, next) =>{
  c.setHeader('Access-Control-Allow-Origin',  '*');
  c.setHeader('Access-Control-Allow-Methods', [
        'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'
    ]);
  c.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  c.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  await next(c);
});

app.options('/*', async c =>{});

var td=new titloader();

td.init(app);

app.run(8677);
