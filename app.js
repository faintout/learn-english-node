const Koa = require('koa');
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static")
const router = require('./app/router/index');
const updateWord2Json = require("./app/module/updateWord2Json.js");
app.use(bodyParser());
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
})
app.use(staticFiles(__dirname + "/app/dist"));

app.use(router.routes());
app.listen(8989, () => {
    console.log('服务器启动成功', 'http://localhost:8989');
    updateWord2Json()
});