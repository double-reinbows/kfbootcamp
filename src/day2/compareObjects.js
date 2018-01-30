function compareObjects(obj1, obj2) {
  let numOfKeys = Object.keys(obj1).length !== Object.keys(obj2).length ? false : true;
  if (!numOfKeys) return false;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  console.log(keys1.sort(), keys2.sort());
  if (keys1.sort().equals(keys2.sort())) {
    return true;
  }
  // return Object.keys(obj1).equals(Object.keys(obj2));
  return false;
}

export default compareObjects;


//Simon's solution
// function compareObjects(objOne, objTwo) {
//   let keysOne = Object.keys(objOne);
//   let keysTwo = Object.keys(objTwo);
//   if (keysOne.length !== keysTwo.length) {
//     return false;
//   }
//   for (let key of keysOne) {
//     if (objOne[key] !== objTwo[key]) {
//       return false;
//     }
//   }
//   for (let key of keysTwo) {
//     if (objOne[key] !== objTwo[key]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// export default compareObjects;
