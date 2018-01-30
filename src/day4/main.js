// @flow

type MapFunc = (item: string) => number;

function arrayMap(array: Array<string>, fn: MapFunc): Array<number> {
  let result = [];
  for (let item of array) {
    result.push(fn(item));
  }
  return result;
}

let a = ['Rei', 'Adrian', 'Domi'];

let b = arrayMap(a, (s) => s.length);

console.log(b);

type Person = {
  name: string;
  age: number;
};
