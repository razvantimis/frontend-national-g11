// 0. Objects - Why OOP?

// --- Programare orientata pe obiecte --- 
// Cu un obiect modelam ceva din viata reala
// Obiectele au caracteristici si functionalitati
// Cum definim caracteristici? key:value => atribute
// Cum definim functionalitatea? functii / metode ( [].map())

// v1
// const car1 = {
//   color: 'red',
//   engine: 'electric',
//   runEngine: false,
//   km: 200000,
//   model: 'Dacia',
//   start: function () {
//     console.log('start car')
//     // vrem sa face update la atributul runEngine in true
//     car1.runEngine = true;
//     console.log(car1)
//   }
// }

// const car2 = {
//   color: 'blue',
//   engine: 'hybrid',
//   runEngine: false,
//   km: 0,
//   model: 'BMW',
//   start: function () {
//     console.log('start car')
//     // vrem sa face update la atributul runEngine in true
//     car2.runEngine = true;
//     console.log(car2)
//   }
// }
// car1.start();
// car2.start();


// Factory function
// Obiecte de acelasi tip ( Car ) => au acelasi caracteristici si functionalitate la fel
function createCar(carColor, carEngine, carKm, carModel) {
  return {
    color: carColor,
    engine: carEngine,
    runEngine: false,
    km: carKm,
    model: carModel,
    start: function () { // metode 
      console.log('start car')
      // vrem sa face update la atributul runEngine in true
      // this este obiectul curent
      console.log(this)
      this.runEngine = true;
    }
  }
}

const car1 = createCar('red', 'electric', 200000, 'Dacia')
const car2 = createCar('blue', 'hybrid', 0, 'BMW')
const car3 = createCar('green', 'hybrid', 10000, 'B')

// car3.start();
// this este legat de obiectul pe care apelam metoda
car1.start(); // this va fi car1
// car2.start();

// This exemple
// Valoare this-ului difera in functie de unde il folosim

// scoatem valoare din key start in alta variabila
const startCar3 = car1.start;
// Se pierde this-ul
startCar3(); // this va fi window

// This global
// This este contextul de executie a functiei
// console.log(this) // this va fi window

// function show() {
//   console.log(this) // this va fi window
// }
// show();


// Options obj

function createCar(options) {
  return {
    color: options.color,
    engine: options.engine,
    runEngine: false,
    km: options.km,
    model: options.model,
    start: function () {
      console.log('start car')
      // vrem sa face update la atributul runEngine in true
      // this este obiectul curent
      console.log(this)
      this.runEngine = true;
    }
  }
}

const car4 = createCar({ color: 'blue', engine: 'electric', km: 1045454, model: 'Dacia' })

