// 2. Encapsulation
// const car10 = new Car('red') // nu avem hosting pe class
class Car {
  constructor(color) {
    this.color = color; // public prop
    this._active = false;
  }

  start() {
    // aici putem folosi props private
  }

}
const car1 = new Car('red')

// prop private/public
// Daca este public, putem accesa infara clasei
// De exemplu putem face car1.color
// Daca vrem ca active sa fie privata, sa nu putem face codul de mai jos
// In Js nu exista nu exista private ( este work in progress https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes)
// Atunci folosim underscore ca o recomandare
console.log(car1._active)


class Employee {
  constructor(name) {
    this._name = name;
  }

  doWork() {
    return `${this._name} is working`;
  }

  get name() {
    // sa mai adaugam o anumita logica pe date
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }
}

const em1 = new Employee("Alex");
console.log(em1.name) // ALEX se apeleaza get name()
em1.name = "razvan" // se apeleaza set name

// 3. Inheritance
// Ajuta la refolosirea codului
class Engine {
  constructor(engineType) {
    this.runEngine = false;
    this.engineType = engineType;
  }
  start() {
    this.runEngine = true;
  }
  stop() {
    this.runEngine = false;
  }

  toString() {
    return "Salut, eu sunt motor"
  }
}

class Car extends Engine {
  constructor(color, engineType) {
    super(engineType) // super este constructorul de la clasa Vechile
    // Scopul apelari este sa avem prop de la Vechile
    this.color = color;
  }
}

class Fly extends Engine {
  // constructor(engineType) { 
  //   super(engineType) 
  // } 
  // Daca nu ai deloc constructor
  // Se apeleaza constructorul de la Engine
  fly() {

  }

  toString() {
    return 'Sunt un avion'
  }
}

// Fly.prototype != Car.prototype != Engine.prototype
// Fly.prototype = { fly,...., __proto__= Engine.prototype }

const engine1 = new Engine('electric');
const car1 = new Car('red', 'electric')
const fly1 = new Fly('ddd')


// 4. Prototype chain ( toString ex)
// Este poza prototype-chain.png
// Daca facem un obiect nou gol {} atunci __proto__ este Object.prototype

fly1.start()
// 1. incepe sa caute in Fly.prototype metoda start, daca nu o gaseste
// 2. cauta in Engine.prototype, daca nu o gaseste
// 3. cauta in Object.prototype, daca nu o gaseste va da erroare

fly1.toString() // =>  "[object Object]"
// Cauta in fiecare prototype pana ajunge la Object.prototype
// Iar daca definim o metoda toString in Engine atunci se apeleaza metoda din Engine.prototype

// 5. Composition
// Clasa Car are un Engine
class Engine {
  constructor(engineType) {
    this.runEngine = false;
    this.engineType = engineType;
  }
  start() {
    this.runEngine = true;
  }
  stop() {
    this.runEngine = false;
  }
}

class Car {
  constructor(color, engineType) {
    this.engine = new Engine(engineType)
    this.color = color;
  }

  start() {
    this.engine.start();
    // logica nostra
  }

}

const car1 = new Car('red', 'electric');
const car2 = new Car('green', 'electric');
car1.start();

// 6. Polymorphism

class Engine {
  constructor(engineType) {
    this.runEngine = false;
    this.engineType = engineType;
  }
  start() {
    this.runEngine = true;
  }
  stop() {
    this.runEngine = false;
  }

  toString() {
    return "Salut, eu sunt motor"
  }
}

class Car extends Engine {
  constructor(color, engineType) {
    super(engineType) // super este constructorul de la clasa Vechile
    // Scopul apelari este sa avem prop de la Vechile
    this.color = color;
  }

}

class Fly extends Engine {

  start() {
    console.log("fly mode")
    this.flyMode = true;
    // Car.display()
  }

  toString() {
    return 'Sunt un avion'
  }
}

// list stim ca este o lista de Engine 
// Toata logica care o facem se bazeaza pe metodele/props de la clasa Engine
function startAllEngine(list) {
  for (var i = 0; i < list.length; i++) {
    list[i].start();
  }
}

const listOfEngine = [
  new Car('red', 'electric'),
  new Fly(),
  new Car('green', 'electric'),
  new Fly(), // se apeleaza start de pe Fly.prototype ( metoda start din clasa Fly)
]

startAllEngine(listOfEngine);

// 7. Static method/props

class Fly extends Engine {

}
class Car extends Engine {
  static LIMIT_SPEED = 10
  constructor(color, engineType) {
    super(engineType) // super este constructorul de la clasa Vechile
    // Scopul apelari este sa avem prop de la Vechile
    this.color = color;
  }

  // este o metoda static , la fel ca functia displayCar
  // o functie utilitara care are legatura cu clasa Car
  static display(car) {
    // nu avem acces la This
    // nu avem nevoie de un obiect al clasei Car ca sa apeleam metoda
    console.log(car.color)
    console.log(car.engineType)

  }
}

// Functie normala infara clasei
// function displayCar(car) {
//   console.log(car.color)
//   console.log(car.engineType)
// }
// function displayFly(fly) {
//   console.log(fly.engineType)
// }

const car1 = new Car('red', 'electric')
// displayCar(car1);
Car.display(car1)
console.log(Car.LIMIT_SPEED)

// Object.values()
// Math.random()


// static inaite de ES6

function Car(color) {
  this.color = color;
}

Car.LIMIT_SPEED = 10;

Car.display = function () {

}




