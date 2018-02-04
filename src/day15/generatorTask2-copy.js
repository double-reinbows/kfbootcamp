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
  // console.log('DICK', repos);
  return repos.map((repo) => repo.name);
}

function run(func) {
  let _func = func;
  let _yield = _func.next();
  let promises = [];
  while (!_yield.done) {
    if (_yield.value.type === 'WAIT') {
      setTimeout(() => {
        console.log('waiting ' + _yield.value.ms);
        _yield = _func.next();
        return;
      }, _yield.value.ms);
    } else if (_yield.value.type === 'FETCH') {
      let promise = new Promise((resolve) => {
        fetch(_yield.value.url).then((res) => {
          return res.json();
        }).then((data) => {
          console.log(data);
          _func.next(data);
          return data;
        });
        resolve;
      });
      promises.push(promise);
    }
    _yield = _func.next();
  }
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
// c
console.log(promise.then());
