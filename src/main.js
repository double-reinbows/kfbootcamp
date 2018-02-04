import Search from './day15/Search';

import ReactDOM from 'react-dom';
import React from 'react';

let div = document.createElement('div');
if (document.body) {
  document.body.appendChild(div);
}

ReactDOM.render(<Search />, div);
