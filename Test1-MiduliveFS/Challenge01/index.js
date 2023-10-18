// 1 - Fix this function so that the subsequent code works as expected:
// Execute -> node Test1-MiduliveFS/Challenge01/index.js

import net from 'node:net'

export const ping = (ip, callback) => { //Was missing the second parameter, the callback function (err, info) ()
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    //return { time: process.hrtime(startTime), ip } // it doesn't work
    callback(null, { time: process.hrtime(startTime), ip } )
  })
  
  client.on('error', (err) => {
    //throw err // it doesn't work
    client.end()
    callback(err) // Or callback(err, null)
  })
}

ping('youtube.com', (err, info) => {
  if (err) console.error(err)
  else console.log(info)
})

// TIPS

// 1.- Always first look at the parameters
