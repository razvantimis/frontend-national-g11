
//  JS Advanced
//  Scope - Hoisting ( var vs let/const )

// -----  Scopul unei variabile (si function) ------

// 1. Global

// scopul este global => avem acces la variabila oriunde in fisier
// si in alte fisiere

// Pe window gasim tot ce este global daca folosim var
// var myName = "Alex";
// daca folosim var putem supra scrie daca mai declara odata var myName
// let myName = "Alex";
// dar cu let nu


// cu let sau const

// let myName = "Alex";

// console.log(myName);


// 2. Local

// var are function scope sau global
function fn1() {
  // nu poate fi accesata inafara functie fn1
  var myName = 'test';
}

function fn2() {
  // var myName poate fi accesata oriunde 
  // chiar daca este declarata in if,for,while
  if (true) {
    var myName = 'test';
  }
  console.log(myName)
}

// vs let/const
// let/const are bloc scope
function fn3() {
  // myName poate fi accesata oriunde 
  // chiar daca este declarata in if,for,while
  let vizibilaInToataFunctia = 10;
  if (true) {
    let myName = 'test'; // doar local in if
    console.log(vizibilaInToataFunctia)
    // in acest bloc oriunde mai jos
  }
  console.log(myName) // nu putem accesa myName aici
}



// for cu var
function fn4() {
  var index = 999;
  for (var index = 0; index < 10; index++) {
    // console.log(index);
  }

  console.log(index)
  // se supra scrie valoare 999 cu valoare 10
  // 10, putem accesa index infara forului
}

// for cu let
function fn5() {
  let index = 99999;
  for (let index = 0; index < 10; index++) {
    // console.log(index);
  }
  console.log(index)
  // Uncaught ReferenceError: index is not defined
  // nu putem accesa index infara forului
}



// ----------  Hoisting -------------------
// ridica sus de tot declaratia
// se aplica pe functii

// hosting ne permite sa accesam functia inaitea definiri ei
fn6()

function fn6() { }

// se aplica pe var
// hosting se aplica doar pe declaratia variabile
// console.log(myAge)

// var myAge = 9999;
// console.log(myAge)

// pe let/const nu se aplica hosting

// hosting se aplica la nivel de functie
function fn7() {
  console.log(myName)
  myName = 1;
  console.log(myName)

  var myName;
}
// console.log(myName) - nu poate fi accesata


// cu let/const

function fn8() {
  // Cannot access 'myName' before initialization
  // Pentru nu se aplica hosting
  console.log(myName)
  myName = 1;
  console.log(myName)

  let myName;

  // putem accesa myName doar dupa ce am declarat
}

// let/const pot fi accesate doar dupa ce le-am declarat
// var pot fi accesate si inaite de a fi declarat ( hosting )



// Lexical scope
// orinde in cod mai jos, putem accesa orice definim sus
var myVar1 = 10;

function fn10() {
  console.log(myVar1)
}


// caz 1
// var global = 10; // scop global

// function fn11() {
//   global = 9999;

//   //var global; // scopul local in function + hosting
// }
// fn11()
// console.log(global) // 10



// caz2
var index = 8888;
function fn12() {
  for (var index = 0; index < 10; index++) {

  }
  index = 999;
  // var index;

}

fn12();
console.log(index)
