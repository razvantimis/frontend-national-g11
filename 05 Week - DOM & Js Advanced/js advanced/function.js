
//  JS Advanced
// 1. Function - paramater by reference / by value

function function1(param1, age, curs) {
}

// in param1 vom avea valoare doar cand apelam functia 

// function1("test")
// let myName = "test";
// function1(myName)


// Daca noi putem in functie sa afectam parametri
//  => sa schimba valorile => in exterior sa avem valorile schimbate

// #### paramater by value - parametri trimisi prin valoare ###
// Se aplica pe string,number,boolean
// Daca functia poate modifica valoare parametrilor din exteriorul functie
// Se trimite o primitiva + se face o copie a valori
// cum am face var x = 10
// nu putem modifica
function fn1(x) {
  // nu conteaza ce nume are parametru
  // parametri au scopul local
  x = 30;
}
let myParam = 10;
fn1(myParam)
// console.log(myParam) // 10

// se afiseaza valoare undefined pentru ca nu returneaza nimic
// console.log(fn1(10))
// var returnResult = fn1(10);

// ###### paramater by reference (in C avem pointer ) ####### 
// Se aplica pe Object/Array
// nu se mai face o copie a array-ului
// se trimite adresa unde se afla valoare
// noi putem modifica valorile de la adresa
function fn2(x) {
  x[0] = 9999;
}

let myParam2 = [1, 2, 3, 4, 5];
fn2(myParam2)
// console.log(myParam2)

function fn3(x) {
  x.name = "test";
}
let myParam3 = {};
fn3(myParam3);
// console.log(myParam3)

// De ce avem reference?
let param2 = [2, 3, 4] // defapt avem 999999999999999 de element = 10mb RAM
// daca ar face prin valoare => ar face o copie => 10mb RAM

fn3(param2) // apelam de 100 => 100 * 10mb RAM


// 1.2 Function param scope
function fn4(params) {
  // scopul este local la parametri
  // pot fi accesati oriunde in functie
}

// 2. Expression function / anonymous function / arrow function
// anonymous function => nu definim numele
var myFun = function () {

} // tot avem hosting pentru ca am folosit "var"
// apelam
myFun();

// const myFn2 = function(){}
// nu mai avem hosting 

// 2.1 anonymous function 

// un modul
(function () {
  // izolam codul
  function test() {

  }
  // add event to btn
  // console.log('apelam direct functia')
})();
// test() // nu poate fi accesat

// 2.2 ES6: arrow function - expresii

const fn10 = () => 10 + 5;
const fn11 = () => {

  return 10 + 5;
}

// 4. Recursive functions
// Functia se apeleaza pe ea
// Trebuie sa avem o conditie de oprire a apelului recursiv
// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// fib(0) = 0
// fib(1) = 1
// fib(2) = fib(0) + fib(1)
// fib(3) = fib(1) + fib(2)
// fib(4) = fib(2) + fib(3) => fib(0) + fib(1) + fib(1) + fib(2) => ....

// fib(7) => 13

function fib(value) {
  console.log(value)
  if (value === 0) {
    return 0;
  }
  if (value == 1) {
    return 1;
  }
  return fib(value - 2) + fib(value - 1);

}

// console.log("Fib=", fib(3)) // 13

// convert with switch

// 3. Closure

function parentFun(param1, param2) {
  let a = 1;
  return function innerFun() {
    console.log(a)
    console.log(param2)

  }
}

const innerFun1 = parentFun(10, "name")
// => Ce se intampla daca innerFun foloseste param2 si a din parentFun
innerFun1()


// function clickBtn(params) {

// }
// const btn = document.createElement('button')
// btn.addEventListener('click', clickBtn)
