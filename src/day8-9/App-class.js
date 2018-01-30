// @flow
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';
import SearchForm from './SearchForm';
import initialState from './initialState-class';
import ClearForms from './ClearForms';

import type {State} from './types/State';

type Props = {};

class App extends Component<Props, State> {
  state = initialState;

  _onToggleDone = (id: string) => {
    let newItems = this.state.todoItems.map(
      (item) => (item.id === id ? {...item, isDone: !item.isDone} : item),
    );
    this.setState({
      todoItems: newItems,
    });
  };

  _addItem = () => {
    let {todoItems, addTodoInput} = this.state;
    let newItem = {
      id: Math.random().toString(),
      content: addTodoInput,
      isDone: false,
    };
    this.setState({
      todoItems: [...todoItems, newItem],
      addTodoInput: '',
    });
  };

  searchTextChanged = (nextValue: string) => {
    this.setState({searchInput: nextValue});
  };

  addItemTextChanged = (nextValue: string) => {
    this.setState({addTodoInput: nextValue});
  };

  render() {
    let {todoItems} = this.state;
    let searchText = this.state.searchInput.toLowerCase();
    return (
      <div>
        <SearchForm searchValue={this.state.searchInput} onChange={this.searchTextChanged} />
        <ul>
          {todoItems.filter((item) => item.content.toLowerCase().includes(searchText)).map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              toggleDone={this._onToggleDone}
            />
          ))}
        </ul>
        <NewItemForm onAddItem={this._addItem} addTodoInput={this.state.addTodoInput} onTextChange={this.addItemTextChanged} />
        {/*<ClearForms />*/}
      </div>
    );
  }
}

export default App;
