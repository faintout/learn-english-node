const Koa = require('koa');
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static")
const router = require('./app/router/index.js');
app.use(bodyParser());
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
})
app.use(staticFiles(__dirname + "/dist"));
app.use(router.routes());
app.listen(8989, () => {
    
});