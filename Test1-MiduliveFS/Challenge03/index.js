// 3 - Explain what the function does. 
// Identify and fix errors in the following code. 
// If you see something unnecessary, delete it. //Delete SetTimeout
// Then improve it so that it still works with callback and then do what you consider to improve its readability.

import fs from "node:fs"; //Add fs = file system

export function processFile(callback) {
  fs.readFile('./Challenge03/input.txt', 'utf8', (error, content) => {
    if (error) {
      console.error('Error reading file:', error.message);
      callback(error) //return false;
    }

      const processedText = content.toUpperCase();

      fs.writeFile('./Challenge03/output.txt', processedText, error => {
        if (error) {
          console.error('Error saving file:', error.message);
          callback(error) //return false;
        }

        console.log('File processed and saved successfully');
        callback(null) //return true;
      });

  });
}

processFile((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("It works");
    }
})