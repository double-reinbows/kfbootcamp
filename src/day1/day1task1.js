let isEqual = (a, b) => {
  let lengthSame = a.length !== b.length ? false : true;
  if (!lengthSame) return false;

  for (var i=0; i<a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  isEqual([], []),
  true
);

console.log(
  isEqual([1], [2]),
  false
);

console.log(
  isEqual([1], [1, 2]),
  false
);

console.log(
  isEqual([1, 2, 3], [1, 2, 3]),
  true
);
