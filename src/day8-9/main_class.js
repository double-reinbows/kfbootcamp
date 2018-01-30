// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App-class';

let div = document.createElement('div');
if (document.body) {
  document.body.appendChild(div);
}


export default function myRender() {
  ReactDOM.render(<App />, div);
}
