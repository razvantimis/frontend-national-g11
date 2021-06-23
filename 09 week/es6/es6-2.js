// 7. Destructuring
//     1. Destructuring Object 
//     2. Destructuring Arrays 
//     3. Destructuring Nested Object
//     4. Destructuring Rename
// 7.1. Destructuring Object 
// Conteaza numele variabile
const user = { myName: 'Alex', age: 23 }

// versiune veche
let myName = user.myName;
let age = user.age;
// noua
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


// 3. Destructuring Nested Object

const user = {
  xname: {
    firstName: 'T',
    lastName: 'A',
    sr: {
      a: 1
    }
  }
}

const { xname: { firstName, lastName, sr: { a } } } = user;

console.log(firstName)

//  4. Destructuring Rename

// x = 10, asa dam valoare default la variabila, daca x nu exista in user
const user = {
  xname: 'Alex',
  // x: 12,
}
const { xname: myName, x = 10 } = user;
// Destructuring function

function show({ firstName }) {
  console.log(firstName)
}

show({
  firstName: 'A',
  lastName: 'B'
})

// user2?.name 
// egale
// user2 ? user2.name: undefined

// 7. Spread operator / Function Rest parameters / Copy obj
// Spread/rest operator => ...
//  Copy obj
const user = { firstName: 'A', lastName: 'T' }
// se trimit prin referinta

// const user2 = Object.assign({}, user); // v1 de copiere
const user2 = { ...user, ...{ x: 1 }, ...{ firstName: 'Raz' } }
const user3 = { ...user, x: 1, firstName: 'Raz' }
// const user3 = { firstName: 'A', lastName: 'T', x: 1, firstName: 'Raz' }
// ultima key supra scrie pe cele din fata
console.log(user2)
//user2.firstName = "Ale"

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2, 7, 8, 9] // [1, 2, 3,...., 9]

// Function Rest parameters
function show(arg1, arg2, arg3, ...restParams) {
  console.log(arg1, arg2, arg3) // 1 2 3
  console.log(restParams) // [4, 5, 6, 7, 8, 9, 10, 11, 12]
}

show(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)

function show2(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3)
}
const array = [1, 2, 3]
show2(...array); // show2(1,2,3)

// 8. Enhanced Object Literals

const firstName = 'Al'
const lastName = 'T';

const user = {
  firstName: firstName,
  lastName: lastName
}

// es6
// key va fi numele variabilei
const user = {
  firstName,
  lastName
}

