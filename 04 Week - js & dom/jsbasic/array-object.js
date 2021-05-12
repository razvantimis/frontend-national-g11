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

// atribuire
persoan.isMan = false;
console.log("Person.isMan=", persoan.isMan)

// add new key
persoan.myNewKey = { key1: "value1", key2: 23 }
console.log("Add new key", persoan)

// delete a key
delete persoan.myNewKey;
console.log("Delete new key", persoan)


// Array
