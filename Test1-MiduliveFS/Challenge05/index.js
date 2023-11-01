// 5 - Write a delay function that returns a promise that resolves after n milliseconds. For example:

/*
export async function delay () {
    // ...
  }
  
  delay(3000).then(() => console.log('Hola mundo'));
  // o..
  await delay(3000)
  console.log('Hola mundo')
*/

export async function delay (time) {
    return new Promise(res => {
        setTimeout(()=>{
            console.log("Hello World 1")
            res(console.log("Hello World 2"))
        }, time)
        //setTimeout(res, time)
    })
}

delay(3000)
