// @flow
/* eslint-disable curly */

function filterArray<T>(array: Array<T>, fn: (T) => boolean): Array<T> {
  let output = [];
  for (let item of array) {
    if (fn(item)) output.push(item);
  }
  return output;
}

export default filterArray;
