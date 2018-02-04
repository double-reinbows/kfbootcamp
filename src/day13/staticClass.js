// @flow

class Thing {
  name: 'Rei';
  printName() {
    console.log(this.name);
  }
  static printMyName(name: string) {
    console.log('Your name is ' + name);
  }
}

let thing = new Thing();
thing.printName();
Thing.printMyName('Rei');
