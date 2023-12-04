const fs = require('fs');
const Result = require('./result')
const { getWordMd,getAllWordList}  = require('./readFile')
const outputFile = './app/assets/allWordList.json'
// 读取Markdown文件并解析内容
//获取匹配后的单词
const updateWord2Json = async () => {
    return new Result('单词更新成功！')
    try {
        const regex = /^(\d+)\.\s+\*\*(.+?)\*\*\s+(\[.+?\])\s+(.+?)\n\s+-\s+(.+?)\s+\((.+?)\)\n\s+-\s+(.+?)\s+\((.+?)\)/gm;
        let match;
        const results = [];

        while ((match = regex.exec(getWordMd())) !== null) {
            const [_, number, word, partOfSpeech, definition, example1, translation1, example2, translation2] = match;
            const entry = {
                num: parseInt(number),
                word: word.trim(),
                chinese: partOfSpeech + ' ' + definition.trim(),
                examples: [{
                        example: example1.trim(),
                        translation: translation1.trim()
                    },
                    {
                        example: example2.trim(),
                        translation: translation2.trim()
                    }
                ]
            };
            results.push(entry);
        }
        const resultJson = JSON.stringify(results, null, 2)
        // 将处理后的内容写入新的Markdown文件
        fs.writeFile(outputFile, resultJson, (err) => {
            if (err) {
                console.error('保存错误', err);
                console.log('单词更新失败',err)
                return new Result(null, 500, `单词更新失败：${err.message}`);
            }
            console.log('单词更新成功')
        });
        return new Result('单词更新成功！')
    } catch (error) {
        return new Result(null, 500, `单词更新失败：${error.message}`)
    }
    // return results
}
// updateWord2Json(1,20)
module.exports = updateWord2Json