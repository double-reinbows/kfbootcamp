// @flow

type Database = {[string]: mixed};
type MyFunc = (mixed) => void; //(input) => output;

export default class DataStore {
  database: Database = {};
  get(key: string) {
    return this.database[key];
  }
  set(key: string, value: mixed) {
    this.database[key] = value;
    return 'Good job m8';
  }
  forEach(fn: MyFunc) {
    for (let key of Object.keys(this.database)) {
      // if (Array.isArray(this.database[key])) {
      //   //value is not a simple number but an array
      //   this.database[key] = this.database[key].map((item) => {
      //     return fn(item);
      //   });
      //   // }
      // } else {
        this.database[key] = fn(this.database[key]);
      // }
    }
  }
}
