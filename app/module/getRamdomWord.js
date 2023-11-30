const fs = require('fs');
const data = fs.readFileSync('./app/assets/word.md',);
// 读取Markdown文件并解析内容
function parseMarkdownFile() {
    const regex = /\*\*(.*?)\*\*\s*\[.*?\]\s*(.*)/g;
    let match;
    const wordsParams = [];

    while ((match = regex.exec(content)) !== null) {
        wordsParams.push(
            {
                english: match[1],
                chinese: match[2]
            }
        )

    }

    return wordsParams;
}
//获取匹配后的单词
const getAllRegWord = () => {

const regex = /^(\d+)\.\s+\*\*(.+?)\*\*\s+(\[.+?\])\s+(.+?)\n\s+-\s+(.+?)\s+\((.+?)\)\n\s+-\s+(.+?)\s+\((.+?)\)/gm;

let match;
const results = [];

while ((match = regex.exec(data)) !== null) {
  const [_, number, word, partOfSpeech, definition, example1, translation1, example2, translation2] = match;
  const entry = {
    number: parseInt(number),
    word: word.trim(),
    definition: partOfSpeech + ' ' + definition.trim(),
    examples: [
      { example: example1.trim(), translation: translation1.trim() },
      { example: example2.trim(), translation: translation2.trim() }
    ]
  };
  results.push(entry);
}

console.log(results);
}

// 打乱数组顺序的函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 获取随机单词和中文解释
function getRandomWordsByIndex(start, end) {
    const wordsList = parseMarkdownFile();
    let selectedWordsList = wordsList;
    if (start !== undefined && end !== undefined) {
        selectedWordsList = wordsList.slice(start - 1, end);
    }

    const shuffledWordsList = shuffleArray(selectedWordsList);

    shuffledWordsList.map(_ => console.log(_.english))
    console.log();
    shuffledWordsList.map(_ => console.log(_.chinese))
}

//获取单词根据索引
const getWordByIndex = (index) => {
    const wordsList = parseMarkdownFile();
    return wordsList[index + 1]
}

// 使用函数
// getRandomWordsByIndex();
// getRandomWordsByIndex(381, 419);
getAllRegWord()

module.exports = {

}



