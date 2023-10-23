import { processFile } from "../index.js";

import { describe, it, beforeEach, afterEach } from 'node:test'
import { equal, ifError } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

/*Need to execute two times:
In First one it will create the input file
The second one will generate the outputfile
*/

describe('3. Process File Promise', () => {
    afterEach(() => {
      try {
        unlinkSync('./Challenge03/output.txt')
      } catch {}
    })
  
    it('3.1. processFile', (t, done) => {
      writeFileSync('./Challenge03/input.txt', 'gogogo')
      processFile((err) => {
        ifError(err)
        readFile('./Challenge03/output.txt', 'utf8')
          .then((contenido) => {
            equal(contenido, 'GOGOGO')
            done()
          })
      })
    })
})