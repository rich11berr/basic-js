const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let names = []

  if (!Array.isArray(members)) {
    return false
  }

  for(let name of members) {
    if(typeof name === 'string') {
      names.push(name.trim().split('')[0])
    }
  }

  return names.map((e) => e.toUpperCase()).sort().join('');
};
