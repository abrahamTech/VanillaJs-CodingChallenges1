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

      console.log('File processed and saved successfully (processFile method)');
      callback(null) //return true;
    });

  });
}

/*processFile((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("It works");
    }
})*/


export function processFileOptimized (callback) {
    const handleWrite = () => {
        if (error) {
            console.error('Error saving file:', error.message);
            callback(error) //return false;
        }
  
        console.log('File processed and saved successfully');
        callback(null) //return true;
    };

    const handleRead = () => {
        if (error) {
            console.error('Error reading file:', error.message);
            callback(error) //return false;
          }
      
          const processedText = content.toUpperCase();
      
          fs.writeFile('./Challenge03/output.txt', processedText, handleWrite);  
    }

    fs.readFile('./Challenge03/input.txt', 'utf8', handleRead);

}

export async function processFilePromise () {

  let content = "";

  /*try {
    content = await fs.promises.readFile('./Challenge03/input.txt', 'utf8');
  } catch (error) {
    console.error("Error reading file: ", error.message);
    throw error
  }*/

  content = await fs.promises.readFile('./Challenge03/dataPromise/inputP.txt', 'utf8')
    .catch(error => {
      console.error("Error reading file: ", error.message)
      return ""
    })

  const processedTextPromise = content.toUpperCase();
  
  try {
    await fs.promises.writeFile('./Challenge03/dataPromise/outputP.txt', processedTextPromise);
  } catch (error) {
    console.error("Error saving file: ", error.message);
    throw error
  }

  console.log('File processed and saved successfully (processFilePromise method)');
}

/*await processFilePromise();*/