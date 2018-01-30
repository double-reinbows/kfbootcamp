// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let div = document.createElement('div');
if (document.body) {
  document.body.appendChild(div);
}

export default function render() {
  ReactDOM.render(<App />, div);
}
