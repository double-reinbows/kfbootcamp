let object = {
  name: 'Simon',
  age:[1,2,3],
  validated: false,
  otherObject: {'herp':'derp'}
};

let object1 = new Object;
let array = [];

let addNumbers = function(a,b) {
  return a+b;
};

//arrow function
let addNumbers2 = (a,b) => {
  return a+b;
};

//implicit return
let addNumbers3 = (a,b) => a+b;

let object3 = {
  hello: () => {
    console.log('Hi There')
  },
}

//to call the function inside object
object3.hello();
//OR
let hello = object3.hello();
hello;

let name = 'Simon';
//this is a mutation
array.push(5);
//this is not
name = name+" Dog";

//spread operator
let array1 = [1, 2, 3];
let array2 = [...array1, 4];

let herp = 'hi';
herp = 2;

const string = '123';
//this will fail
//string = '1234'
const string2 = '1234';

const array3 = [2, 3, 4];
array3.push(50);
console.log(array3);

let person = {
  name: 'Rei'
}
person = {
  name: 'Simon'
}

let person1 = {
  name: 'Rei'
}
personCopy = person1;
personCopy.name = 'Simon';
console.log(person1 === personCopy); //true

console.log(
  'this is a test case',
  isEqual(1,2),
  false
)

let longHand = {
  add: (a,b) => {
    return a+b;
  }
}
let shortHand = {
  add(a,b) => a+b,
  minus(b,a) => b-a
}
