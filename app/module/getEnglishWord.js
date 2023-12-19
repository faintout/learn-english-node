const Result = require('./result')
const petsData = require('../assets/PETS3-2023.json');

petsData.sort((a, b) => a.name.localeCompare(b.name));

function printPetsData(startIndex, endIndex) {
  try {
    // 使用slice方法获取指定范围的数据
    const selectedPets = petsData.slice(startIndex - 1, endIndex);
    selectedPets.forEach((pet, index) => {
      console.log(`Name: ${pet.name}, Trans: ${pet.trans}`);
    });
    return new Result(selectedPets)
  } catch (e) {
    return new Result(null, 500, `获取数据失败：${e.message}`)
  }

}

printPetsData(1201,1251)
module.exports = printPetsData

