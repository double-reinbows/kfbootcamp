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

function run(generator) {
  return new Promise((resolve, reject) => {
    function processNextGen() {
      let {done, value} = generator.next();
      if (!done) {
        switch(value.type) {
          case 'WAIT': {
            setTimeout(() => {
              let next = generator.next();
              console.log('next :', next);
              resolve('Done'); //putting Resolve here will make it run in sequence
            }, value.ms);
            break;
          }
          case 'FETCH': {
            break;
          }
        }
      }
    }
  }
}

let generator = getUserRepos('sstur');
let promise: Promise<mixed> = run(generator);

console.log(promise.then());
