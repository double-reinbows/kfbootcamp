// @flow
/* eslint-disable brace-style */

import type {State} from './types/State';
import {setState} from './main_react';
import React from 'react';

type Props = {
  state: State,
};

function App(props: Props) {
  let {state} = props;

  let unsorted = state.todoItems.map((item) => {
    if (item.isDone) { //strikethrough
      return (
        <li key={item.id} isdone={item.isDone} onClick={() => {toggleDone(item);}}>
          <s>{item.content}</s>
        </li>
      );
    } else {
      return (
        <li key={item.id} isdone={item.isDone} onClick={() => {toggleDone(item);}}>
          {item.content}
        </li>
      );
    }
  });

  function toDoItems(unsorted) {
    console.log(unsorted);
    let sorted = [];
    for (let item of unsorted) {
      console.log('DERP', item);
      if (item.props.isdone) {
        sorted.push(item);
      } else {
        sorted.unshift(item);
      }
    }
    return sorted;
  }


  let toggleDone = (clickedItem) => {
    let newTodoItems = state.todoItems.map((item) => {
      let newItem;
      if (clickedItem.id === item.id) {
        newItem = {...item, isDone: (item.isDone ? false : true)};
        return newItem;
      } else {
        return item;
      }
    });
    let newState = {...state, todoItems: newTodoItems};
    setState(newState);
    // clickedItem.isDone = clickedItem.isDone ? false : true;
    // myRender();
  };

  return (
    <ul>
      {toDoItems(unsorted)}
    </ul>
  );
}

export {App};
