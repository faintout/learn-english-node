const Router = require("koa-router");
const router = new Router();
// router.get("/", (ctx, next) => {
//   ctx.body = "<h3>服务器请求成功</h3>";
//   ctx.body += "<h3>接口地址如下</h3> <br/>";
//   ctx.body+=router.stack.map(stack=>`<a href="${stack.path}" target="_blank">${stack.path}</a>`).join('<br/>')
// });
const updateWord2Json = require("../module/updateWord2Json");
const {
    getRandomWordsByRange,
    getWordByIndex,
    getAllWordList
} = require("../module/getRandomWord");
const {
    getRandomHistoryList,
    getRandomDetailByIndex,
} = require("../module/getRandomHistory");

const { getErrorExamList,setErrorExamList,getErrorExamInfo } = require('../module/errorExam')  
//获取某个单词的详细信息
router.get('/getWordByIndex/:index',async(ctx,next)=>{
    let index = ctx.params.index;
    ctx.body = await getWordByIndex(index)
})
//更新单词
router.get('/updateWord',async(ctx,next)=>{
    ctx.body = await updateWord2Json()
})
//获取全部单词
router.get('/getAllWordList',async(ctx,next)=>{
    ctx.body = await getAllWordList()
})
//获取随机单词根据范围
router.get('/getRandomWords',async(ctx,next)=>{
    const {start,end} = ctx.query;
    ctx.body = await getRandomWordsByRange(start,end)
})
//获取随机单词历史列表
router.get('/getRandomHistoryList',async(ctx,next)=>{
    ctx.body = await getRandomHistoryList()
})
router.get('/getRandomDetailByIndex/:index',async(ctx,next)=>{
    let index = ctx.params.index;
    ctx.body = await getRandomDetailByIndex(index)
})
router.get('/getErrorExamList',async(ctx,next)=>{
    ctx.body = await getErrorExamList()
})
router.get('/getErrorExamInfo/:index',async(ctx,next)=>{
    let index = ctx.params.index;
    ctx.body = await getErrorExamInfo(index)
})
router.post('/createErrorExamList',async(ctx,next)=>{
    const {indexList} = ctx.request.body;
    ctx.body = await setErrorExamList(indexList)
})
module.exports = router;