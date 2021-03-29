const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  for (let i of matrix) {
    for (let j of i) {
      if (j === '^^') {
        counter++;
      }
    }
  }
  return counter;
  
};
