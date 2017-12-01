const koa = require('koa');
const app = new koa();
const views = require('koa-views');

const router = require('koa-router')();
// const mount = require('koa-mount')
// const server = require('koa-static')
const bodyParser = require('koa-bodyparser');
const reflect = require('reflect-metadata');

const main = require('./routes/main');
const aboutuser = require('./routes/aboutuser');
const rank = require('./routes/rank');
const mysql = require('./models/basedatabase');
const Application = require('./routes/tools/application');


app.use(bodyParser());
app.use(router.routes());



app.listen(Application.PORT, Application.IP);

console.log('start app...');

app.use(require('koa-static')(__dirname + '/public'));   //设置静态文件路径

app.use(views(__dirname + '/views',{
    extension: 'jade'
}));




app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


app.use(main.routes(), main.allowedMethods());
app.use(aboutuser.routes(), aboutuser.allowedMethods());
app.use(rank.routes());

module.exports = app;
