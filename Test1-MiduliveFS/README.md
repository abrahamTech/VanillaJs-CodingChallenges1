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