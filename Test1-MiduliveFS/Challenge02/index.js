// 2 - Transform the following function so that it works with promises instead of callbacks:
/*
export function obtenerDatosPromise(callback) {
    setTimeout(() => {
      callback(null, { data: 'datos importantes' });
    }, 2000);
  }
*/
/*
obtenerDatosPromise((err, info) => {
  console.log(info)
})
*/


//1 Option (Using the original code, add the next one)
/*
import { promisify } from "node:util";

const obtenerDatos = promisify(obtenerDatosPromise);
*/


//2 Option (Change all the code)
export function getData() {

  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        res({data: "Important Data"});
      } catch (e) {
        rej(e);
      }
    }, 2000)
  })

}

//Promise .then
getData()
  .then(info => {
    console.log(info);
  })
  .catch(error => {
    console.error(error);
  })

//Promise await
try{
  const info = await getData();
  console.log(info);
} catch(error) {
  console.error(error);
}