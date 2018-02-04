export function* fiboOuter() {
  let prevNum = 0;
  let currNum = 1;
  while (true) {
    let newNum = fiboInner(prevNum, currNum);
    yield newNum;
    prevNum = currNum;
    currNum = newNum;
  }
}

export default function fiboInner(prevNum, currNum) {
  return prevNum + currNum;
}

let myFib = fiboOuter();
console.log(myFib.next());
