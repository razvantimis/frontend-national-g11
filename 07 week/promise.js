
// Executia este instanta ( instant se pune in callback queue )
// ca si setTimeout cu 0
function exemplePromise() {
  let promise1 = new Promise((resolve, reject) => {
    // punem codul care vrea sa fie executat asyncron
    try {
      let sum = 0
      for (let index = 0; index < 9999; index++) {
        sum += index
      }
      resolve(sum) // apelam resolve cand avem rezultatul
    } catch (err) {
      reject(err)
    }
  })

  promise1
    .then((result) => {
      // functia asta va fi 
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  console.log('dupa promise')
}


function promiseVsSetTimeout() {

  const promise1 = new Promise((resolve) => {
    for (let index = 0; index < 9999; index++) {
      console.log('promise1:test')
    }
    resolve();
  })

  promise1.then(() => {
    console.log('in then')
  })

  setTimeout(function () {
    console.log('setTimeout:test')
  })

  console.log('cod normal syncron')

}