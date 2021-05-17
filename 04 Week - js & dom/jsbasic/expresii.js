// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators


// expresie matematica
var number1 = 10 - (20 / 10) * 3;

// expresi logica

var conditie1 = (10 > 2 && 20 === 21) || number1 || (11 > 23 && 23 < 23); // number1 = 4

// cu paranteze grupam

console.log(!true); // negare
console.log(!!true); // negarea negari

console.log(!!{}); // => true
console.log(!!undefined); // => false


// ternary op
// este ca si un if mai scurt
// este o expresie
var age = 10;

// v1
var status = (age >= 18) ? 'adult' : 'minor';

// v2 cu if ar fi
if (age >= 10) {
  status = 'adult'
} else {
  status = 'minor'
}



