// @flow

type CallType = "INCOMING" | "OUTGOING" | "MISSED";

type Call = {
  type: CallType,
  phoneNumber: number,
  timestamp: string,
};

function createCallLog() {
  let incomings: Array<Call> = [];
  let outgoings = [];
  let misseds = [];
  let dt = new Date();
  let timestamp: string = dt.toUTCString();
  return {
    add: (type: CallType, phoneNumber: number) => {
      if (type === 'INCOMING') {
        incomings.push({type, phoneNumber, timestamp});
      } else if (type === 'OUTGOING') {
        outgoings.push({type, phoneNumber, timestamp});
      } else {
        misseds.push({type, phoneNumber, timestamp});
      }
    },
    getRecent: (type: CallType, maxNum: number) => {
      if (type === 'INCOMING') {
        return incomings.slice(-maxNum);
      } else if (type === 'OUTGOING') {
        return outgoings.slice(-maxNum);
      } else {
        return misseds.slice(-maxNum);
      }
    },
  };
}

// let docreateCallLog = createCallLog();
// console.log(call.add('HERP', 1234));
// console.log(call.getRecent('INCOMING', 1));
export default createCallLog;
