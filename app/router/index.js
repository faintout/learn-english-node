const Router = require("koa-router");
const router = new Router();
//查询当前索引单词-详细参数
// 查询全部单-详情参数
// 查询记录目前全部记录-时间/x-x/个数
// 查询某一个记录详情

// router.get("/", (ctx, next) => {
//   ctx.body = "<h3>服务器请求成功</h3>";
//   ctx.body += "<h3>接口地址如下</h3> <br/>";
//   ctx.body+=router.stack.map(stack=>`<a href="${stack.path}" target="_blank">${stack.path}</a>`).join('<br/>')
// });
//获取某个单词的详细信息
router.get('/getWordByIndex',async(ctx,next)=>{
    ctx.body = await getWordByIndex()
})
router.get('/weiboNews',async(ctx,next)=>{
    ctx.body = await getWeiboNewsAjax()
})
router.get('/08News/:page',async(ctx,next)=>{
    let page = ctx.params.page;
    ctx.body = await get08NewsListByPages(page||3)
})
router.get('/yaohuo/:page',async(ctx,next)=>{
    let page = ctx.params.page;
    ctx.body = await getYaoHuoListByPages(page||5)
})
router.get('/doubanBuy/:page',async(ctx,next)=>{
    let page = ctx.params.page;
    ctx.body = await getDoubanBuyListByPages(page||3)
})
module.exports = router;