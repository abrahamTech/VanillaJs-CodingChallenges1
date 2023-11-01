import { readFiles4 } from "../index.js";

import { describe, it, beforeEach, afterEach } from 'node:test'
import { equal, ifError } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

describe('4. readFiles4', () => {
    // it('4.1. leerArchivos', () => {
    //   const mensaje = leerArchivos()
    //   equal(mensaje, 'hola qué tal')
    // })
  
    it('4.1. readFiles4', async () => {
      const message = await readFiles4()
      equal(message, 'Hello, this is the File 1 Hello, this is the File 2 Hello, this is the File 3')
    })
  })