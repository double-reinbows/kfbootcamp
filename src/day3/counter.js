// @flow
function createCounter() {
  let count: number = 0; //type declaration unnecessary because I've set it to 0 straightaway
  return {
    inc: () => {
      count++;
    },
    dec: () => {
      count--;
    },
    getCount: () => {
      return count;
    },
  };
}

export default createCounter;
