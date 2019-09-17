/* eslint-disable strict */
//Max and Min
function max(numbers) {
  let i = 0;
  let maxNum = 0;
  if(numbers.length === 0){
    return undefined;
  }
  while (i < numbers.length){
    if(maxNum < numbers[i]){
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
}
  
function min(numbers) {
  let i = 0;
  let minNum = numbers[0];
  if(numbers.length === 0){
    return undefined;
  }
  while (i < numbers.length){
    if(minNum > numbers[i]){
      minNum = numbers[i];
    }
    i++;
  }
  return minNum;
}

//Average

function average(numbers) {
  let totalNum = 0;
  numbers.forEach(function(el) {
    totalNum += el;
  });
  return totalNum/numbers.length;
}

average([4,5,6]);
