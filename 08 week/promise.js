// Promise ne ajuta sa gestionam mai multe functii asyncrone

function promiseEx() {
  const promise1 = new Promise(function (resolve, reject) {
    // cod de aici este syncron
    console.log('promise1:merge syncron');
    resolve('done');
  })

  // Promise chain
  promise1
    .then((result) => {
      // callback pe succes se executa asyncron
      console.log('promise1: then 1, result=', result)
      return 123; // result
    })
    .then((result) => {
      console.log('promise1: then 2, result=', result)
    })
    .then((result) => {
      console.log('promise1: then 3, result=', result)

    })
  console.log('cod normal')
}
// Ce printeaza codul din functia promiseEx
// promise1:merge syncron
// cod normal
// promise1: then 1, result= done
// promise1: then 2, result= 123
// promise1: then 3, result= undefined


