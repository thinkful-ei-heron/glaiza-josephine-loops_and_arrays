// //Higher Order Function
// function repeat(fn, n) {
  
//   for(let i=0; i<n; i++){
//     fn();
//   }
// }
// repeat(hello, 5);
// repeat(goodbye, 6);
  
// function hello() {
//   console.log('Hello world');
// }
  
// function goodbye() {
//   console.log('Goodbye world');
// }

// // filter 

// function filter(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++){
//     if (fn(arr[i])===true){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
  
// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
  
// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });
  
// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// console.log(filter(myNames, name => name[0]==='R'))

//Function as return Values

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function (location) {
        warningCounter ++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        if(warningCounter === 1) {
            console.log(`DANGER! There is a ${typeOfWarning} hazard alert has triggered ${warningCounter} time today`);
        } else {
            console.log(`DANGER! There is a ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today`);
        }
        
        return warningCounter;
    }; 
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const rainWarning = hazardWarningCreator('Flooding');
const windWarning = hazardWarningCreator('Haboob');

rocksWarning(`USA`);
rocksWarning(`LA`);
rainWarning('LA');
windWarning('Arizoa');

const turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const noNeg = turtle.filter(arr => arr[0] > -1 && arr[1] > -1)
console.log(noNeg)

const addNum = noNeg.map(arr => arr[0]+arr[1])
console.log(addNum);

const movements = addNum.forEach((el,i) => console.log(`Movement #${++i}: ${el} steps`))
console.log(movements);
