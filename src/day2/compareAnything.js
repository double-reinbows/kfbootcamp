// @flow
function compareAnything(a: mixed, b: mixed) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'string' || typeof a === 'number') {
    return a === b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    let lengthSame = a.length !== b.length ? false : true;
    if (!lengthSame) {
      return false; //different lengths
    }
    if (a.length === 0) {
      return true; //2 empty arrays
    }
    for (let i = 0; i < a.length; i++) {
      // if (Array.isArray(a[i]) || Array.isArray(b[i])) {
      //   console.log('HERP');
      //   return compareAnything(a[i], b[i]);
      // }
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  } else if (Array.isArray(a) || Array.isArray(b)) {
    return false;
  } else if (a == null && b == null) {
    return true;
  //we now know that they're both NOT null so the following statement
  //will check that only one is but not the other
  } else if (a == null || b == null) {
    return false;
  } else if (typeof a === 'object') {
    if (Object.keys(a).length) {
      for (let key of Object.keys(a)) {
        // if (Array.isArray(a[key]) && Array.isArray(b[key]) &&
        //         a[key].length === b[key].length) {
        //   console.log([1,2] !== [1,2]);
          if (a[key] !== b[key]) {
            return false;
          }
        // }
      }
    }
    return compareAnything(Object.keys(a).sort(), Object.keys(b).sort());
  } else {
    console.log('Oops! something went wrong');
    return null;
  }
}
export default compareAnything;
