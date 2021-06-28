// 2. Classes - function vs es
// Ce sunt clasele? De ce nevoie de el?
// Folosim clasele le folosim ca sa facem obiecte de acelasi tip
// Clasele sunt un blueprint/macheta

// ES6

class Car {

  runEngine = false;

  // Este optional - deci putem avea clase si fara el
  // Daca vrem sa dam valori din exterior nu putem fara el, putem da diferite valori la atribute
  constructor(carColor, carEngine, carKm, model) {
    // in momentul in care creeam obiectul se apeleaza
    this.color = carColor;
    this.engine = carEngine;
    this.km = carKm;
    this.model = model;
    // this.runEngine = false;
    this.nrOfDoors = 4;
  }

  myMethod() {

  }

  start() {
    console.log('start car')
  }

  stop() {
    console.log('stop car')

  }
}
// new => se creaza un nou obiect folosim clasa Car
const car0 = new Car(); // undefined
console.log(car0)
const car1 = new Car('red', 'electric', 200000, 'Dacia')
const car2 = new Car('blue', 'hybrid', 0, 'BMW')
const car3 = new Car('green', 'hybrid', 10000, 'B')
// car1.nrOfDoors = 10 // putem reasigna valori
console.log(car1)
console.log(car2)
console.log(car3)
car3.start();