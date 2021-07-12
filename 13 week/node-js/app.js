// Ce este Node.Js?
// Ne ajuta sa face backend (nu interectioneaza end userul cu app-ul) in javascript
// Ne permite sa rulam codul de javascript fara browser ( nu avem acces la document - DOM Api)

console.log('hello I\'m node')
console.log(100+34)

// Il putem rula prin terminal rulam: node app.js

// Ce este npm?
// O aplicatie scrisa in javascript care se ocupa de gestionarea packages

// Pentru a folosi npm va trebuie sa rulam: npm init
const partition = require('lodash/partition');
const result = partition([1, 2, 3, 4], n => n % 2);
console.log(result)