// @flow
/* global __dirname */
import fs from 'fs';
import {join} from 'path';

let path = join(__dirname, '../flow-typed');
fs.readdir(path, (error, fileNames) => {
  if (error) {
    throw error;
  }
  // console.log('fileList', fileList);
  type FileSizes = {[string]: number};
  let fileSizes: FileSizes = {};
  for (let fileName of fileNames) {
    fileSizes[fileName] = 0;
  }
  // let i = 0;
  // let doNextFile = () => {
  for (let fileName of fileNames) {
    fs.stat(join(path, fileName), (error, stat) => {
      if (error) {
        throw error;
      }
      // for (let stat of stats) {
      //   fileSizes[fileName] = stat.size;
      // }
      fileSizes[fileName] = stat.size;
      if (fileSizes.length === fileNames.length) {
        console.log(fileSizes);
      }
    });
  }
  // };

  // doNextFile();
});
