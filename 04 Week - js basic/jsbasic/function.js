// 6. Function basic

// refolosirea codului

function suma() {
  // aici scriem codul
  console.log("orice ce cod")
  console.log("orice ce cod")
  console.log("orice ce cod")
  console.log("orice ce cod")
  console.log("orice ce cod")
}

suma();
suma();
suma();
suma();
suma();
suma();

// suma a doua numere
// conteaza ordinea
function sum(number1, number2, number3) {
  console.log(number1 + number2)
  console.log(number3)
}

sum(10, 20)
sum(3, 5)
sum(-10, undefined)
sum(null, { age: 10 })
sum([1, 3, 4], { age: 10 })

var fullName = "Timis"

sum(fullName, 10)

// return

function sum2(number1, number2) {
  if (number1 > number2) {
    return number1 + number2;
  }
  // codul de dupa if nu se executa daca conditia number1 > number2 este true
  return 0;

  console.log('nu se executa')
}

console.log(sum2(10, 12)) // => 0
console.log(sum2(15, 12)) // => 27

var suma3 = sum2(17, 34) + 10 / 34 * 400;

function sum10(number1) {
  return sum2(number1, 10) // valori hardcodate
}

sum10(23)


// nested function

function fn1() {
  function fn2() {
    return 10;
  }

  return fn2();
}

// callback function

function operatie(number1, number2, callbackFnOP) {
  if (typeof number1 != "number") {
    return "Number 1 este invalid"
  }
  if (typeof number2 != "number") {
    return "Number 2 este invalid"
  }

  return callbackFnOP(number1, number2);
}

// al 3 param este o functie anonima
operatie(10, 20, function (number1, number2) {
  return number1 + number2;
})

operatie(10, 20, function (number1, number2) {
  return number1 - number2;
})

operatie(10, 20, function (number1, number2) {
  return number1 * number2;
})
