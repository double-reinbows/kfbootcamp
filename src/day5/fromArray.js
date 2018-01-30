// @flow

function fromArray(thing): Array<mixed> {
  if (Array.isArray(thing)) {
    return thing;
  } else {
    let output = [];
    for (let key of thing.keys()) {
      output.push(thing[key, thing[key]]);
    }
    return output;
  }
}
