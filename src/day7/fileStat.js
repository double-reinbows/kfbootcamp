// @flow
/* global __dirname */
import fs from 'fs';
import {join} from 'path';

let path = join(__dirname, '../flow-typed');
fs.readdir(path, (error, fileList) => {
  if (error) {
    throw error;
  }
  console.log('fileList', fileList);

  let i = 0;
  let doNextFile = () => {
    fs.stat(join(path, fileList[i]), (error, result) => {
      console.log(fileList[i], result.size);
      if (i === fileList.length - 1) {
        console.log('DONE');
      } else {
        i += 1;
        doNextFile();
      }
    });
  };

  doNextFile();
});
