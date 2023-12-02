const Result = require('./result')
const {getAllWordList,getRandomIndexList } = require('./readFile')

// 获取随机单词和中文解释
const getRandomHistoryList = async () => new Result(getRandomIndexList())

//获取单词根据索引
const getRandomDetailByIndex = async (index) => {
    try {
        const {
            indexList
        } = getRandomIndexList()[index]
        const wordsList = indexList.map((item, index) => {
            return getAllWordList()[item - 1]
        })
        return new Result(wordsList)
    } catch (e) {
        return new Result(null, 500, `获取历史单词失败：${e.message}`)
    }

}

module.exports = {
    getRandomHistoryList,
    getRandomDetailByIndex
}