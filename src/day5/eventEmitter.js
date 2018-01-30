// @flow
// import EventEmitter from 'events';

// let emitter = new EventEmitter();
//
// emitter.addListener('userLoggedIn', () => {
//   console.log('User has logged in');
// });
//
// emitter.emit('userLoggedIn');

type Events = {[string]: {[string]: Function}};
export default class MyEventEmitter {
  events: Events = {};
  addListener(eventName: string, fn: Function) {
    if (this.events[eventName]) {
      this.events[eventName].add(fn);
    } else {
      this.events[eventName] = new Set();
      this.events[eventName].add(fn);
    }
  }
  emit(eventName: string) {
    if (this.events[eventName]) {
      for (let func of this.events[eventName]) {
        func();
      }
    }
  }
}
