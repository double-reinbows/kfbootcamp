function pluck(array, propName) {
  let func = (element) => element[propName];
  return array.map(func);
}

export default pluck;
