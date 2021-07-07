// 2. Classes - function vs es
// Ce sunt clasele? De ce nevoie de el?
// Folosim clasele le folosim ca sa facem obiecte de acelasi tip
// Clasele sunt un blueprint/macheta

// ES6

class Car {
  runEngine = false;
  // Este optional - deci putem avea clase si fara el
  // Daca vrem sa dam valori din exterior nu putem fara el, putem da diferite valori la atribute
  constructor(carColor, carEngine, carKm, model, price) {
    // in momentul in care creeam obiectul se apeleaza
    this.color = carColor;
    this.engine = carEngine;
    this.km = carKm;
    this.model = model;
    // this.runEngine = false;
    this.nrOfDoors = 4;
    this.price = price;
  }

  myMethod() {

  }

  start() {
    console.log('start car')
    console.log(this)
  }

  stop() {
    console.log('stop car')

  }
}

// // new => se creaza un nou obiect folosim clasa Car
// const car0 = new Car(); // undefined
// console.log(car0)
const car1 = new Car('red', 'electric', 200000, 'Dacia', 100)
const car2 = new Car('blue', 'hybrid', 0, 'BMW')
const car3 = new Car('green', 'hybrid', 10000, 'B')
// // car1.nrOfDoors = 10 // putem reasigna valori
// console.log(car1)
// console.log(car2)
// console.log(car3)
// car3.start();

//  inaite de ES6

// Functie constructor
function Car(color, engine, km, model) {
  this.color = color;
  this.engine = engine;
  this.km = km;
  this.model = model;
  this.runEngine = false
}
// Functia Car are acelasi prototype ca si car1,car2,car3
// prototype-ul este shared intre obiectele clasei dar si clasa in sine
console.log(Car.prototype)

Car.prototype.start = function () {
  console.log('start car', this)
}

// const array = new Array() <=> []
// new String()
// new Promise()
// Toate instantele(car1, car2, car3) au acelasi prototype
const car1 = new Car('red', 'electric', 200000, 'Dacia')
const car2 = new Car('blue', 'hybrid', 0, 'BMW')
const car3 = new Car('green', 'hybrid', 10000, 'B')
// console.log(car1)
// car1.start() => this va fi car1
// car2.start() => this va fi car2
console.log(car1)

// car1.__proto__ === Car.prototype
// Sa pus __ pentru a ne spune ca este privata, nu trebuie accesat
console.log("car1.__proto__ === Car.prototype", car1.__proto__ === Car.prototype) // true
console.log("car1.__proto__=", car1.__proto__)

// Deci se poate modifica dar se recomanda sa nu
// car1.__proto__.stop = function () {
//   console.log('stop car')
// }
// Toate metodele de la array, string sunt pe prototype
// Array.prototype
// String.prototype
// Object.prototype

const array = [1, 2, 3]
// putem supra scrie metoda forEach
Array.prototype.forEach = function () {
  console.log('bla bla')
}

array.forEach((el) => { console.log('test', el) })