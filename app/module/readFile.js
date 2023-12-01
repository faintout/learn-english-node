const fs = require('fs');
// 获取所有单词
const getAllWordList = () => {
    const allWordListStr = fs.readFileSync('./app/assets/allWordList.json', 'utf8');
    return JSON.parse(allWordListStr)
}
// 获取单词md
const getWordMd = ()=>fs.readFileSync('./app/assets/word.md');
// 获取随机索引
const getRandomIndexList = () => {
    const userRandomIndexStr = fs.readFileSync('./app/assets/userRandomIndexList.json', 'utf8');
    return JSON.parse(userRandomIndexStr)
}

module.exports = {
    getAllWordList,
    getRandomIndexList,
    getWordMd
}