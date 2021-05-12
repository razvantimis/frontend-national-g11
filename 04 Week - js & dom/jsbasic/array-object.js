// Tipuri compuse - array - object


// JSON - JavaScript Object Notation
var myJSON = `
  {
    "name":"John", 
    "age":31, 
    "city":"New York"
  }
`;
console.log(JSON.parse(myJSON)) // string => object
console.log(JSON.stringify({ name: "test", age: 21 })) // object => string

// Object

var persoan = {
  age: 31,
  city: "New York",
  isMan: true,
  fullName: {
    firstName: "John",
    lastName: "Last"
  },
  1: "test"
}
console.log("Show person:", persoan)

// Accesam din interiorul obiectului o anumita cheie
console.log("FullName:", persoan.fullName)
console.log("LastName:", persoan.fullName.lastName)
console.log("First letter of lastName:", persoan.fullName.lastName[0])

// atribuire pe object
persoan.isMan = false;
console.log("Person.isMan=", persoan.isMan)

// add new key
persoan.myNewKey = { key1: "value1", key2: 23 }
console.log("Add new key", persoan)

// delete a key
delete persoan.myNewKey;
console.log("Delete new key", persoan)


// Array (lista, sir)

var numbers = [1, 2, 3, 0, 3, 2, 5, 9] // o lista de numere
var strings = ["paine", "apa", "lapte"] // o lista de string


var array1 = [ // putem avea orice valorii
  1, // index = 0
  "paine", // index = 1
  false,
  null,
  undefined,
  {}, //  = obiect gol
  { name: "razvan" },
  [1, 2, 3]
]

// cum accesam? Dupa index

console.log("object razvan=", array1[6])

// cum aflam lungimea unui array?
console.log("Cate element avem un array =", array1.length)

// atribuire pe array
array1[6] = false;
console.log("object razvan modificat=", array1[6])
