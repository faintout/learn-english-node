const fs = require('fs');
const Result = require('./result')
const {getAllWordList,getRandomIndexList } = require('./readFile')
const outputFile = './app/assets/userRandomIndexList.json'
// 打乱数组顺序的函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 获取随机单词和中文解释
async function getRandomWordsByRange(start, end) {
    try {
        const wordsList = [...getAllWordList()]
        let selectedWordsList = wordsList;
        if (start !== undefined && end !== undefined) {
            selectedWordsList = wordsList.slice(start - 1, end);
        }

        const shuffledWordsList = shuffleArray(selectedWordsList);
        //保存索引顺序
        const indexList = shuffledWordsList.map((item, index) => {
            return item.num
        })
        const params = {
            user: 'yhn',
            times: new Date().toLocaleString(),
            start: start,
            end: end,
            indexList
        }
        const resultJson = JSON.stringify([...getRandomIndexList(), params], null, 2)
        //保存单词
        fs.writeFile(outputFile, resultJson, (err) => {
            if (err) {
                console.error('保存错误', err);
                return new Result(null, 500, `获取随机单词失败：${err.message}`)
            }
        });
        return new Result(shuffledWordsList)
    } catch (e) {
        return new Result(null, 500, `获取随机单词失败：${e.message}`)
    }

}
//获取单词根据索引
const getWordByIndex = async(index) => {
    try{
        const wordsList = [...getAllWordList()]
        return new Result(wordsList[index - 1])
    }catch(e){
        return new Result(null, 500, `获取单词失败：${e.message}`)
    }
}

module.exports = {
    getRandomWordsByRange,
    getWordByIndex
}