// Execute -> node Test1-MiduliveFS/Challenge01/test/ping.test.js

import { ping } from "../index.js";

import { describe, it } from 'node:test'
import { equal, ifError } from 'node:assert/strict'


describe('1. ping', () => {
    it('1.1. ping youtube.com', (_, done) => {
        ping('youtube.com', (err, info) => {
            ifError(err)
            equal(info.ip, 'youtube.com')
            done()
        })
    })
})
