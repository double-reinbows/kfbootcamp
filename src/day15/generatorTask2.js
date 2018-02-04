// @flow
import fetch from 'node-fetch';
type Action =
  | {
      type: 'WAIT',
      ms: number,
    }
  | {
      type: 'FETCH',
      url: string,
    };

function* getUserRepos(userID: string) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 300};
  console.log('DICK', repos);
  return repos.map((repo) => repo.name);
}

function run(func) {
  let _func = func;
  let _yield = _func.next();
  let promises = [];
  let promResolved = null;
  while (!_yield.done) {
    // console.log('HERP');
    if (promResolved !== false) {
      promises.push(new Promise((resolve) => {
        if (_yield.value.type === 'WAIT') {
          console.log('waiting...');
          setTimeout(resolve, _yield.value.ms);
        } else if (_yield.value.type === 'FETCH') {
          console.log('fetching...');
          promResolved = false;
          let prom = fetch(_yield.value.url).then((res) => {
            // console.log('Response is ', res);
            return res.json();
          }).then((data) => {
            // arrToPassBackIntoYield = data;
            console.log('data received', data);
            promResolved = true;
            resolve(_func.next(data));
          });
          // while (!promResolved) {
          //   console.log('waiting for data');
          // // _yield = _func.next(fetch(_yield.value.url));
          //   return; //how do I go back to the start of the loop here?
          // }
          // resolve(prom);

        }
      }));
    }
    if (promResolved === false) {
      console.log('data still loading...');
      return; //don't go to next yield until the data is received
    }
    // promResolved = null;
    _yield = _func.next();
    // console.log('BOTTOM', _yield);
  }
  console.log('FINAL YIELD :', _yield.value);
  promises.push(_yield.value);
  return Promise.all(promises);
}

let promise: Promise<mixed> = run(getUserRepos('sstur'));
//
// promise.then((result) => {
//   console.log(result);
// });
// console.log(promise);
// while (promise === undefined) {
//   console.log('processing...');
// }
// console.log(promise);
