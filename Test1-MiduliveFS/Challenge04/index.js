// 4 - How would you improve the following code and why? Fix tests if necessary:

/**
 * It is a synchronous code that blocks the main thread of the project
 * Until it finishes reading the first file, it does not execute other code
 * 
import fs from 'node:fs';

export function leerArchivos() {
  const archivo1 = fs.readSync('archivo1.txt', 'utf8');
  const archivo2 = fs.readSync('archivo2.txt', 'utf8');
  const archivo3 = fs.readSync('archivo3.txt', 'utf8');

  return `${archivo1} ${archivo2} ${archivo3}`
}

leerArchivos();
*/

//Solutions

// * 1.- Change readSync to readFileSync

import fs from 'node:fs';
import fsp from "node:fs/promises"

export function readFiles1() {

    console.time("readFiles1");
    const file1 = fs.readFileSync('./Challenge04/files/file1.txt', 'utf8');
    const file2 = fs.readFileSync('./Challenge04/files/file2.txt', 'utf8');
    const file3 = fs.readFileSync('./Challenge04/files/file3.txt', 'utf8');
    console.timeEnd("readFiles1");

    return `${file1} ${file2} ${file3}`
}
// readFiles1();


// * 2.- Make them an Asynchronous function Sequentially

export async function readFiles2() {

    console.time("readFiles2");
    const file1 = await fsp.readFile('./Challenge04/files/file1.txt', 'utf8');
    const file2 = await fsp.readFile('./Challenge04/files/file2.txt', 'utf8');
    const file3 = await fsp.readFile('./Challenge04/files/file3.txt', 'utf8');
    console.timeEnd("readFiles2");

    return `${file1} ${file2} ${file3}`
}
// readFiles2();


// * 3.- Make them an Asynchronous function in Parallel
//If one fails, all fail (Thats why the catch, to see the error)
// BETTER

export async function readFiles3() {

    console.time("readFiles3");

    //The position of the array when we destructure it matters
    const [file1, file2, file3] = await Promise.all([
        fsp.readFile('./Challenge04/files/file1.txt', 'utf8'),
        fsp.readFile('./Challenge04/files/file2.txt', 'utf8'),
        fsp.readFile('./Challenge04/files/file3.txt', 'utf8'),
    ]).catch(error => {
        console.log(error);
        return []
    })
    
    console.timeEnd("readFiles3");

    return `${file1} ${file2} ${file3}`
}
// readFiles3();


// * 4.- Make them an Asynchronous function in Parallel and using Promise.allSettled
// Promise.allSettled -> It allows us to have more modular control of whether one fails or not.
// If one fails, the others continue and we can obtain their value

export async function readFiles4() {

    console.time("readFiles4");

    //The position of the array when we destructure it matters
    const [file1, file2, file3] = await Promise.allSettled([
        fsp.readFile('./Challenge04/files/file1.txt', 'utf8'),
        fsp.readFile('./Challenge04/files/file2.txt', 'utf8'),
        fsp.readFile('./Challenge04/files/file3.txt', 'utf8'),
    ])
    
    console.timeEnd("readFiles4");
   
    //If one failed, the value will be "undefined"
    console.log(`${file1.value} ${file2.value} ${file3.value}`);

    //If one fails, its value won't be seen
    const message = [file1.value, file2.value, file3.value]
        .filter((value) => typeof value !== "undefined")
        .join(" - ")

    console.log(message);


   return `${file1.value} ${file2.value} ${file3.value}`
}
readFiles4();

