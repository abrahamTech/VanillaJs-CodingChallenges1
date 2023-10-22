import { getData } from "../index.js";

import { describe, it, beforeEach, afterEach } from 'node:test'
import { equal, ifError } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

describe('2. getData', () => {
    it('2.1.getData', async () => {
      const { data } = await getData({ time: 1 })
      equal(data, 'Important Data')
    })
})