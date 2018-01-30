function hello() {
  let name = 'Rei';

  let setName = (newName) => {
    name = newName;
    console.log('Name is now:', name);
  };

  return setName;
}

let thing = hello();

thing('Adrian');
thing.setName('Adrian');
