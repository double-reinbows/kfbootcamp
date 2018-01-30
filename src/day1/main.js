console.log('Hello World');

function pluck(array, propName) {
  let func = (element) => element[propName];
  return array.map(func);
}

it('should pluck values', () => {
  let people = [
    {name: 'Simon', age: 36},
    {name: 'Paul', age: 33},
    {name: 'Nixon', age: 3},
  ];
  expect(pluck(people, 'name')).toEqual(['Simon', 'Paul', 'Nixon']);
});
