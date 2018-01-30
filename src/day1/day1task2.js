// let isEqual = (a, b) => {
//   let lengthSame = a.length !== b.length ? false : true;
//   if (!lengthSame) return false;
//
//   for (var i=0; i<a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// }

let isEqual = function(one, two) {
  return one.length !== two.length ? false : one.every((item, i) => item === two[i]); //Simon's
  // return one.length === two.length ? one.every((item, i) => item === two[i]) : false; //Evan's
}

let testCase = (description, actual, expected) => {
  let passed = '✔';
  let failed = '✗';
  // TODO
  let result = actual === expected ? passed : failed;
  // console.log(result+" "+description);
  console.log(result,description);
};

testCase(
  'empty arrays',
  isEqual([], []),
  true
);

testCase(
  'same size; different elements',
  isEqual([1], [2]),
  false
);

testCase(
  'different sizes',
  isEqual([1], [1, 2]),
  false
);

testCase(
  'exactly the same',
  isEqual([1, 2, 3], [1, 2, 3]),
  true
);

testCase(
  'similar but different types of 1 element',
  isEqual([1, 2, 3], [1, '2', 3]),
  false
);
