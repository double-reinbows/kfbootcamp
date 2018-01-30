// @flow
import React, {Component} from 'react';
import ContactDetails from './ContactDetails';
import ContactsNavigator from './ContactsNavigator';
import type {ContactsState} from './state';

type Props = {};
// type KeyPressAction = (event: SyntheticKeyboardEvent<>) => void;

export default class ContactsApp extends Component<Props, ContactsState> {
  state: ContactsState = {
    people: [
      {id: 0, name: 'Rei', active: true, pic: ''},
      {id: 1, name: 'Simon', active: true, pic: ''},
      {id: 2, name: 'Evan', active: true, pic: ''},
      {id: 3, name: 'Gema', active: true, pic: ''},
      {id: 4, name: 'Listi', active: false, pic: ''},
    ],
    selectedIndex: null,
    searchValue: '',
    addPersonValue: '',
  };

  // componentDidMount() {
  //   document.addEventListener('keydown', this._handleKeyDown);
  //   // document.addEventListener('keydown', this._handleKeyDown.bind(this));
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this._handleKeyDown);
  // }
  //
  // _handleKeyDown = (event: KeyboardEvent) => {
  //   let {selectedIndex} = this.state;
  //   if (event.key === 'ArrowDown' && selectedIndex < this.state.todoItems.length - 1) {
  //     this.setState({selectedIndex: selectedIndex + 1});
  //   } else if (event.key === 'ArrowUp' && selectedIndex > 0) {
  //     this.setState({selectedIndex: selectedIndex - 1});
  //   }
  // };
  //
  // _onToggleDone = (id: string) => {
  //   let newItems = this.state.todoItems.map(
  //     (item) => (item.id === id ? {...item, isDone: !item.isDone} : item),
  //   );
  //   this.setState({
  //     todoItems: newItems,
  //   });
  // };
  //
  // _addItem = () => {
  //   let {todoItems, addPersonValue} = this.state;
  //   let newItem = {
  //     id: Math.random().toString(),
  //     content: addPersonValue,
  //     isDone: false,
  //   };
  //   this.setState({
  //     todoItems: [...todoItems, newItem],
  //     addPersonValue: '',
  //   });
  // };
  //
  searchValueChanged = (newValue: string) => {
    this.setState({searchValue: newValue});
  };

  render() {
    // let {todoItems, addPersonValue, searchValue, selectedIndex} = this.state;
    // let onSearchChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    //   this.setState({searchValue: event.currentTarget.value});
    // };
    // let filteredTodoItems;
    // if (searchValue === '') {
    //   filteredTodoItems = todoItems;
    // } else {
    //   let lowerSearchValue = searchValue.toLowerCase();
    //   filteredTodoItems = todoItems.filter((item) => {
    //     return item.content.toLowerCase().includes(lowerSearchValue);
    //   });
    // }
    let styleSheet = {
      display: 'flex',
    };
    return (
      <div style={styleSheet}>
        <ContactsNavigator people={this.state.people} searchValue={this.state.searchValue}
          searchValueChanged={this.searchValueChanged}/>
        <ContactDetails />
      </div>
    );
  }
}
