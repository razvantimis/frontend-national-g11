
//  Cum putem executa "console.log(posts)" inafara functie getPosts
// version 1
// function getPosts(callback) {
//   fetch('http://localhost:3000/posts')
//     .then(function (response) {
//       return response.json();
//     })
//     .then((posts) => {
//       callback(posts)
//     })
//   // return response.parse() nu avem acces la response
// }

// getPosts((posts) => {

//   console.log("getPosts() =", posts)
// });


// version 2
// function getPosts() {
//   const promise = new Promise((resolve, reject) => {
//     fetch('http://localhost:3000/posts')
//       .then(function (response) {
//         return response.json();
//       })
//       .then((posts) => {
//         resolve(posts)
//       })
//   })
//   return promise;

// }

// getPosts().then((posts) => {
//   console.log("getPosts() =", posts)
// });

// version 3
function getPosts() {
  return fetch('http://localhost:3000/posts')
    .then(function (response) {
      return response.json();
    })
}

getPosts()
  .then((posts) => {
    console.log("getPosts() =", posts)
  })
  .catch((err) => {
    console.log(err)
  });