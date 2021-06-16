// recap axaj - promise

// 1. let,const
// let/const au block scop
// var : are global/function scop , hosting

var a = 10; // se duce declaratia sus ( hosting), putem accesa oriunde in scopul lui
let a1 = 10 //  nu avem hosting => putem accesa a1 dupa linia 8

// const vs let
const myName = "Alex";
myName = "a" // nu putem reassigna o noua valoare

let myName2 = "B";
myName2 = "C" // putem reassigna

const user = { name: "Alex" }
user.name = "A" + "B"; // se poate schimba valoare din obiect

delete user.name // stergere key
user.age = 10; // adaugare key

user = {} // asta nu se poate // Error Assignment to constant variable.

// 2. Arrow function
const myFun = (param1, param2) => param2 + param1; // direct facem return
const myFun = (param1, param2) => {

  return param2 + param1;
}

// 3. Promise async/await

// Promise chain
// getMovies("horror") // getMovies() => returneaza un promise
//   .then(movies => {
//     return getMovies('action') // Returnez un alt Promis
//   })
//   .then(movies => {
//     return getMovies('romanesti')
//   })
//   .then(movies => {
//     return getMovies('drama')
//   })
//   .then(movies => {
//     return getMovies('romance')
//   })
// version with promise
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

// version with async/await
// await il putem folosi doar intr-o functie async
async function getPosts() {
  try {
    const response = await fetch('http://localhost:3000/posts');
    // orice cod normal
    const posts = await response.json();
    // orice cod normal
    return posts;
  } catch (err) {
    console.log('Avem erroare!!!!!')
  }
}

async function displayPosts() {
  const posts = await getPosts();
  console.log(posts)
}
displayPosts();



// 4. Array - map, reducer, forEach,
// 6. Template literals
// 7. Destructuring 
//     1. Destructuring Object 
//     2. Destructuring Arrays 
//     3. Destructuring Nested Object
//     4. Destructuring Rename
// 8. Spread operator / Function Rest parameters
// 9. Enhanced Object Literals