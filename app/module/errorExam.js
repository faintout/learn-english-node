const Result = require('./result')
const fs = require('fs');
const {getErrorExamList:getErrorExamListFile,getAllWordList } = require('./readFile')

// 打乱数组顺序的函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const getErrorExamList = async ()=> new Result(getErrorExamListFile())

const getErrorExamInfo = async (index) => {
    const errorExamList = getErrorExamListFile()[index]
    const allWordList = getAllWordList()
    const newList = shuffleArray(errorExamList.indexList)
    const wordList = newList.map(word=>allWordList[word-1])
    return new Result(wordList)
}
const setErrorExamList = async (indexList) => {
    try{
        const params = {
            user: 'yhn',
            times: new Date().toLocaleString(),
            indexList:indexList.map(Number)
        }
        const errorExamListJson = JSON.stringify([...getErrorExamListFile(),params], null, 2)
        fs.writeFile('./app/assets/errorExamList.json', errorExamListJson, (err) => {
            if (err) {
                console.error('保存错误', err);
                return new Result(null, 500, `保存错误：${err.message}`);
            }
        });
        return new Result('生成列表成功！')
    }catch(err){
        return new Result(null, 500, `生成列表失败：${err.message}`);
    }
}
module.exports = {
    getErrorExamList,
    setErrorExamList,
    getErrorExamInfo
}