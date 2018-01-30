// @flow

type TodoItem = {
  id: string,
  content: string,
  isDone: boolean,
};

export type State = {
  todoItems: Array<TodoItem>,
  selectedIndex: number,
  searchValue: string,
  inputValue: string,
};

export type Person = {
  id: number,
  name: string,
  active: boolean,
};

export type ContactsState = {
  people: Array<Person>,
  selectedIndex: number | null,
  searchValue: string,
  addPersonValue: string,
};
