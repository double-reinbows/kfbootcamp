// @flow
import type {State} from './types/State';

type UpdateFunction = (state: State, data: ?mixed) => State;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

let eventHandlers: EventHandlerObject = {
  toggleDone: (oldState, id) => {
    let newTodoItems = oldState.todoItems.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    return {...oldState, todoItems: newTodoItems};
  },
  cacheInput: (oldState, text) => {
    return {...oldState, textInput: String(text)};
  },
  addToDo: (oldState) => {
    let x = document.getElementById('inputItem');
    if (x) {
      let value = typeof x.value === 'string' ? x.value : '';
      if (value) {
        let newToDoItem = {id: 'derp', content: value, isDone: false};
        let newTodoItems = [...oldState.todoItems, newToDoItem];
        return {...oldState, todoItems: newTodoItems};
      }
    }


    return oldState;
  },
};

export default eventHandlers;
