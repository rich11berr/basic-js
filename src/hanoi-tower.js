const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const count = Math.pow(2, disksNumber) - 1;
  const sec = Math.floor((3600 / turnsSpeed)*turns);
  return {count: count, sec: sec};
};
