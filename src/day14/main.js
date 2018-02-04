// @flow

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
let before = Date.now();
console.log('now ', before);
let mySleep = sleep(2000);
mySleep.then(console.log(Date.now() - before));
