// @flow
import {App} from './App';
// import TextInput from './TextInput';
import {render} from 'react-dom';
import React from 'react'; //browser + mobile hybrids
// import ReactDOM from 'react-dom'; //specific to browser
// import eventHandlers from './eventHandlers';
import initialState from './initialState';
import type {State} from './types/State';

let state: State = initialState;

export function setState(newState: State) {
  state = newState;
  myRender();
}

let div = document.createElement('div');
if (document.body) {
  document.body.append(div);
}
let div2 = document.createElement('div');
if (document.body) {
  document.body.append(div2);
}

export function myRender() {
  render(
    <App state={state} />, div,
  );
}
