// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import ContactsApp from './ContactsApp';

let div = document.createElement('div');
if (document.body) {
  document.body.appendChild(div);
}

export default function render() {
  ReactDOM.render(<ContactsApp />, div);
}
