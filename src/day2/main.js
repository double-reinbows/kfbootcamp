// @flow
/* eslint-disable no-unused-vars */

let o = {
  one: 'hello',
  two: 'bye',
};
let keys = Object.keys(o);
console.log(keys);

function double(n: string) {
  return n * 2;
}

type Person = {
  name: string | FullName;
  age: number;
  isStudent: null | boolean;
  misc: mixed;
};
type FullName = {
  firstName: string;
  lastName: string;
};

function printName(p: Person) {
  if (typeof p.name === 'string') {
    print(p.name);
  } else {
    let n = p.name;
    print();
  }
}
