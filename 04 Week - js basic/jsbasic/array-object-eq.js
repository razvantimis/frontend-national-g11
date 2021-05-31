// Prin value or reference?

// Prin value face doar la primitive

// Prin reference face egalitate
// Array
// [1, 2 , 3] == [1, 2, 3]
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

console.log(array1 == array2) // false

// Asignare tot prin referinta
var array3 = array1;

// Daca vrem sa comparam array, trebui sa scriem noi for , care parcurge, si comparam continul

// Object

var obj1 = {
  key1: 'value1'
}
var obj2 = {
  key1: 'value1'
}
console.log(obj1 == obj2) // false

// Shallow Comparison
// comparatie intre adrese in cazul object si array


