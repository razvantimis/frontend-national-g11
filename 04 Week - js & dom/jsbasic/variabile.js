// Prima linie Hello World
console.log("Hello world")

/*
 Pe
 mai
 multe linii comentariu
*/

// Variabile - string, number, boolean, null, undefined
// CamelCase  => conventie pentru numele variabilelor

var fullName = "Timis Razvan"; // sir de caractere - string
var fullName2 = 'Timis Razvan'; // sir de caractere - string
var fullName2 = `Timis Razvan`; // sir de caractere - string
var number = 10; // -10, 10.34 - number
var isMan = true // true | false - boolean
var m1 = null; // nu existra continut in variabila
var m2 = undefined;
var a; // valoare va fi undefined
// Null este definit
// Orice variabila care nu are o valoare va fi 

// Folosirea variabilelor

// string - concatenare
var strNew = fullName + " Javascript"
console.log(strNew) // => Timis Razvan Javascript
// accesam doar o literea din string
console.log(fullName[0]) // => T

// number - artmetice = +,-,*,/,%

console.log(10 + 20) // => 30 
console.log(10 - 20) // => -10
console.log(10 * 20) // => 200 , imultim
console.log(10 / 20) // => 200 , impartim
console.log(10 % 20) // => 200 , restul impartiri
console.log(Math.pow(10, 2)) // => 100 , 10^2

// comparati
console.log(10 > 12)
console.log(10 < 12)
console.log(10 <= 12)
console.log(10 >= 12)
// boolean - and, or

console.log(true && false) // true and false
console.log(true || false) // true or false

console.log(!true) // not 


// == vs === 
console.log(true == true) // egalitate 
console.log(true != true)

var number = 10;
var string = "10"

console.log("number == string =>", number == string); // compara doar valorile fara type
console.log("number === string =>", number === string);


// typeof
console.log(typeof "timis") // string
console.log(typeof 10) // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined

// reinitializarea variabilelor

var age1 = 10;
// ... nu stiu cate linii de cod
age1 = 3;


// es6 - const/let
const nume = "test"
let age = 23;

// nume = "Razvan" => nu putem schimba valoarea din variabila

age = 3 // se comporta ca var "reinitializarea"



