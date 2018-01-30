// @flow
import type {State} from './types/State';

let initialState: State = {
  todoItems: [
    {id: '100', content: 'Buy Apples', isDone: false},
    {id: '120', content: 'Wash Car', isDone: false},
  ],
  addTodoInput: '',
  searchInput: '',
};

export default initialState;
