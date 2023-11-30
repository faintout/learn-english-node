const fs = require('fs');
const path = require('path');

// 定义读取和写入的文件路径
const inputFile = path.join(__dirname, 'word.md');
const outputFile = path.join(__dirname, 'onlyWord.md');

// 读取Markdown文件
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

 // 使用正则表达式匹配带数字的行
 const result = data.match(/^\d+\..+$/gm).join('\n\n');

  // 将处理后的内容写入新的Markdown文件
  fs.writeFile(outputFile, result, 'utf8', (err) => {
    if (err) {
      console.error('保存错误', err);
      return;
    }
    console.log('保存成功!');
  });
});
