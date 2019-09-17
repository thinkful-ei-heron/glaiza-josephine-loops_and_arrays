/* eslint-disable strict */
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