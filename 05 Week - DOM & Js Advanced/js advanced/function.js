
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
// 4. Recursive functions
// 3. Closure


