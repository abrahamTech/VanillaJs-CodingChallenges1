## Callbacks vs Promises

### OLD Way (Callbacks)
```javascript
fs.readFile('./Challenge03/input.txt', 'utf8', () => {
    console.log("This what happens next");
}
```

### NEW Way (Promises)

#### .then

```javascript
import fs from "node:fs/promises"

fs.promises.readFile('./Challenge03/input.txt', 'utf8')
    .then(() => {
        console.log("This what happens next");
    })
```

#### async/await

```javascript
import fs from "node:fs"

await fs.promises.readFile('./Challenge03/input.txt', 'utf8');
```

- Note:

You can import `import fs from "node:fs/promises"` so you can only use "fs". Example:

```javascript
import fs from "node:fs/promises"

await fs.readFile('./Challenge03/input.txt', 'utf8');
```

Or 

```javascript
import fs from "node:fs/promises"

fs.readFile('./Challenge03/input.txt', 'utf8')
    .then(() => {
        console.log("This what happens next");
    })
```
