# JavaScript + Node.js Technical Test

Write the solutions in the `solutions/index.js` file while maintaining the function names and their `export`. Use `ESModules` in your Node.js project.

## Settings

* Create a NodeJs Proyect:
```bash
npm init
```

* Install Express:
```bash
npm install express
```

* Set type: module in package.json:
```bash
"type": "module"
```

* Add script tests in package.json:
```bash
"test": "node --test"
```


---

## Test 


* 1 - Fix this function so that the subsequent code works as expected:

```javascript
import net from 'node:net'

export const ping = (ip) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    return { time: process.hrtime(startTime), ip }
  })
  
  client.on('error', (err) => {
    throw err
    client.end()
  })
}

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})
```

* 2 - Transform the following function so that it works with promises instead of callbacks:

```javascript
export function obtenerDatosPromise(callback) {
  setTimeout(() => {
    callback(null, { data: 'datos importantes' });
  }, 2000);
}
```


* 3 - Explain what the function does. Identify and fix errors in the following code. If you see something unnecessary, delete it. Then improve it so that it still works with callback and then do what you consider to improve its readability.

```javascript
export function procesarArchivo() {
  fs.readFile('input.txt', 'utf8', (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message);
      return false;
    }

    setTimeout(() => {
      const textoProcesado = contenido.toUpperCase();

      fs.writeFile('output.txt', textoProcesado, error => {
        if (error) {
          console.error('Error guardando archivo:', error.message);
          return false;
        }

        console.log('Archivo procesado y guardado con éxito');
        return true
      });

    }, 1000);
  });
}
```

* 4 - How would you improve the following code and why? Fix tests if necessary:

```javascript
import fs from 'node:fs';

export function leerArchivos() {
  const archivo1 = fs.readSync('archivo1.txt', 'utf8');
  const archivo2 = fs.readSync('archivo2.txt', 'utf8');
  const archivo3 = fs.readSync('archivo3.txt', 'utf8');

  return `${archivo1} ${archivo2} ${archivo3}`
}

leerArchivos();
```

* 5 - Write a delay function that returns a promise that resolves after n milliseconds. For example:

```javascript
export async function delay () {
  // ...
}

delay(3000).then(() => console.log('Hola mundo'));
// o..
await delay(3000)
console.log('Hola mundo')
```

* 6.- Let's create our own dotenv utility in the dotenv.js file.
The utility should return a config method that reads the .env file and adds any environment variables in the file to the process.env object.

For example if your `.env` file contains:

``` bash
PORT=8080
TOKEN="123abc"
```

Then we could do this:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config()

console.log(process.env.PORT) // "8008"
console.log(process.env.TOKEN) // "123abc"
```

You can also pass the path of the `.env` file as a parameter:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config("./config/.env.local")
```

Things to keep in mind:

* Only the `fs` module is allowed to be used to read the file.
* If the file does not exist, it should not give an error, it just does nothing.
* If the file exists, but does not have any environment variables, you should do nothing.
* It should only support the `.env` file or the one passed as a parameter, it does not need to support `.env.local`, `.env.development` and similar automatically.
* Environment variables are always strings, so if there is a number in the .env file, for example `PORT=8080`, when you read it with `fs` and add it to `process.env` it should be a string, not a number.
* `process.env` is an object and is therefore mutable. This means that we can add new properties without problems.