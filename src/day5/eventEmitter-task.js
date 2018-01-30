// @flow

type Events = {[string]: Array<Function>};
export default class MyEventEmitter {
  events: Events = {};
  addListener(eventName: string, fn: Function) {
    let index: number;
    if (this.events[eventName]) {
      index = this.events[eventName].push(fn) - 1;
    } else {
      this.events[eventName] = [];
      index = this.events[eventName].push(fn) - 1;
    }
    return [eventName, index];
  }
  emit(eventName: string) {
    if (this.events[eventName]) {
      for (let func of this.events[eventName]) {
        func();
      }
    }
  }
  removeListener([eventName:string, index:number]) {
    this.events[eventName] = this.events[eventName].splice(index, 1);
  }
}
