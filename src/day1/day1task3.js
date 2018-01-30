function doubleNumbers(array) {
  output = [];
  array.forEach(function(element) {
    output.push(element*element);
  });
  return output;
}
let isEqual = function(one, two) {
  return one.length === two.length ? one.every((item, i) => item === two[i]) : false; //Evan's
}

let testCase = (description, actual, expected) => {
  let passed = '✔';
  let failed = '✗';
  let result = actual === expected ? passed : failed;
  console.log(result,description);
}

// testCase(
//   'empty array',
//   isEqual(doubleNumbers([]), []),
//   true
// );
// testCase(
//   'standard case',
//   isEqual(doubleNumbers([1,2,3]), [1,4,9]),
//   true
// );
// testCase(
//   '-ve numbers',
//   isEqual(doubleNumbers([-1, -2, -3]), [1,4,9]),
//   true
// );

//--------------------new task------------------------------------------
function mapArray(array, fn) {
  output = [];
  array.forEach((element) => {
    output.push(fn(element));
  });
  return output;
}

mapArray([1, 2, 3], (num) => num * 2);
//using map:
let func = (num) => num*2;
console.log([1, 2, 3].map(func));

let resultOne = mapArray([], (num) => num * 2);
testCase(
  'should return empty array',
  isEqual(resultOne, []),
  true
);

let resultTwo = mapArray([1, 2, 3], (num) => num * 2);
testCase(
  'numbers should get doubled',
  isEqual(resultTwo, [2, 4, 6]),
  true
);
