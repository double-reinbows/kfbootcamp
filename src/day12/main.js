// @flow
// import React from 'react';
// import ReactDOM from 'react-dom';

// import RadioGroups from './RadioGroups';
//
// let div = document.createElement('div');
// if (document.body) {
//   document.body.appendChild(div);
// }
//
// export default function render() {
//   ReactDOM.render(<RadioGroups />, div);
// }

/* Moving on.... */

import * as fs from 'fs';
import denodeify from 'denodeify';

let readdir = denodeify(fs.readdir);
let stat = denodeify(fs.stat);

function doParallel<T>(promiseList: Array<Promise<T>>): Promise<Array<T>> {
  return new Promise((resolve, reject) => {
    let numDone = 0;
    let total = promiseList.length;
    let resultList = [];
    promiseList.forEach((promise: Promise<T>, index: number) => {
      promise.then((result: T) => {
        resultList[index] = result;
        numDone += 1;
        if (numDone === total) {
          resolve(resultList);
        }
      });
    });
  });
}

readdir('../day12').then((fileList) => {
  for (let fileName of fileList) {
    console.log(fileName);
  }
  let promiseList = fileList.map((fileName) => {
    return stat('../day12' + fileName);
  });
  doParallel(promiseList).then((results: Array<Object>) => {
    for (let result of results) {
      console.log(result);
    }
  });
});
