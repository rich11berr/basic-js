const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error();
  }
  let buf = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == '--discard-next'){
      if(i < arr.length){
        buf.push(undefined);
        i+=1;
      }
    }
    else if( arr[i] == '--discard-prev'){
      if(i > 0){
        buf.pop();
      }
    }
    else if( arr[i] == '--double-next'){
      if(i<arr.length-1){
        buf.push(arr[i+1]);
      }
    }
    else if( arr[i] == '--double-prev'){
      if(i > 0){
        buf.push(buf[buf.length-1]);
      }
    }
    else {
      buf.push( arr[i]);
    }
  }
  let result = buf.filter(function(x) {
    return x !== undefined
  })
  return result;
};
