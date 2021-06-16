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


// 4. Array - map, forEach, filter, reducer

const myArray = [1, 2, 3, 4, 5, 6, 7];

// -------  .map -----------
// .map = transforma fiecare element in altceva ( noi definim asta )
// Nu modifica array-ul initial deci myArray ramane la fel
// .map returneaza un nou array cu elemente modificate conform callback
const newMapArray = myArray.map((value, index) => {
  if (index % 2 == 0) {
    return value + 10
  }
  return value;
}) // [11, 12, 13, ... ]
console.log(newMapArray)

// -------  .forEach -----------
// la fel ca un for normal
const myArray = [1, 2, 3, 4, 5, 6, 7];
myArray.forEach((element, index) => {

})

// -------  .filter -----------
// Ca si .map doar ca exclude conform conditie
const myArray = [1, 2, 3, 4, 5, 6, 7];
const parElements = myArray.filter((value) => {
  return value % 2 == 0 // trebuie sa returnam true/false
})
// -------  .reducer -----------
// Reducer are ca scop sa reduca un array la o singura valoare
const myArray = [1, 2, 3, 4, 5, 6, 7];
const value = myArray.reduce((acc, currentValue) => {

  return acc + currentValue;
}, 0)

// ----- .splice ------
// Stergem ceva din array
// Afecteaza array-ul nostru
const myArray = [1, 2, 3, 4, 5, 6, 7];
myArray.splice(2, 1)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 6. Template literals => stringuri in care folosim expresi de js
const myVar = "Razvan";
function sum(a, b) {
  return a + b;
}
const str = `Hello world, ...., ${1 + 1} asdsadas ${myVar} ${sum(1, 2)}`
// 7. Destructuring
//     1. Destructuring Object 
//     2. Destructuring Arrays 
//     3. Destructuring Nested Object
//     4. Destructuring Rename

// 7.1. Destructuring Object 
// Conteaza numele variabile
const user = { myName: 'Alex', age: 23 }

const { myName, age, x } = user; // se creeaza doua variabile ( myName si age) cu valoare din obiect

// putem selectam si doar una dintre key
let { x } = user; // x nu exista in obiect ca si key
console.log(x) // undefined
x = 10
console.log(x) // 10

// 7.2 Destructuring Arrays 
// Nu conteaza numele pentru ca se ia dupa pozitie
const myArray = [1, 2, 3]

const [firstElement, b] = myArray; // firstElement = 1, b=2

const [second] = myArray; // secound = 1

const [_, __, element] = myArray;
// last element = myArray[myArray.length-1]
