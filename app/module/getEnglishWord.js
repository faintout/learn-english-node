const fs = require('fs');

const petsData = require('../asset/PETS3-2023.json');

petsData.sort((a, b) => a.name.localeCompare(b.name));
function printPetsData(startIndex, endIndex) {
  // 使用slice方法获取指定范围的数据
  const selectedPets = petsData.slice(startIndex-1, endIndex);
  return selectedPets
}

// printPetsData()
module.exports = printPetsData

