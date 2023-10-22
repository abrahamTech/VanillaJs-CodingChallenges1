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


1 - Fix this function so that the subsequent code works as expected:

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

2 - Transform the following function so that it works with promises instead of callbacks:

```javascript
export function obtenerDatosPromise(callback) {
  setTimeout(() => {
    callback(null, { data: 'datos importantes' });
  }, 2000);
}
```