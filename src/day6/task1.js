// @flow
import fs from 'fs';

// type FolderSize = number;
fs.readdir('../', (err, files) => {
  if (err) {
    throw err;
  } else {
    let size = 0;
    for (let file of files) {
      let stats = fs.statSync('../' + file);
      size += stats.size;
    }
    console.log(size);
  }
});
console.log('ME FIRST!');
