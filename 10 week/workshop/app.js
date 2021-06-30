// - Sa afisam o masina si cand apasam arrow right merge in dreapta
//    - Facem o clasa Car
// - Un toggle de activa/dezactivare masina
//   Daca este activa =>  putem merge in drepta , background color grey
//   Daca este dezactiva => nu putem merge in drepta, background color white
class Car {
  constructor(color) {
    this.color = color;
    this.active = false;
  }

  // Creeam imaginea
  // <img src="./car.svg" width="100px">
  createCarElement() {
    const imgEl = document.createElement("img");
    imgEl.src = "./car.svg";
    imgEl.style.width = "100px";
    imgEl.style.display = "block";
    imgEl.style.border = "1px solid " + this.color;
    imgEl.style.marginTop = "10px";
    return imgEl;
  }

  // Afiseaza masina pe ecran
  show(parentEl) {
    // setam pe contextul clasei elementul HTML
    this.carElement = this.createCarElement();
    this.carElement.style.position = "relative";
    this.carElement.style.left = "0px";
    // il afisam in DOM
    parentEl.append(this.carElement);

    this.registerClickEvent();
  }
  // - Un toggle de activa/dezactivare masina
  //   Daca este activa =>  putem merge in drepta , background color grey
  //   Daca este dezactiva => nu putem merge in drepta, background color white
  registerClickEvent() {
    // Problema este ca in callback-ul de la eventul de click this este altul
    // Noi vrem ca this sa fie obiectul car

    // solutia 1
    // const self = this; // this este cel corect , Car obiect
    // // Solutia a fost sa facem o variabila in care punem this-ul
    // this.carElement.addEventListener("click", function () {
    //   console.log(this); // aici this este imaginea html
    //   self.carElement.style.background = "grey";
    // });

    // solutia 2
    // Arrow function imprumuta this de mai sus
    this.carElement.addEventListener("click", () => {
      //console.log(this); // sa fie this de mai sus
      this.active = !this.active;
      // console.log(this.active);
      this.carElement.style.background = this.active ? "grey" : "white";
    });
  }

  // Misca masina pe ecran cu 5px in drepta
  moveRight() {
    if (this.active) {
      const left = parseInt(this.carElement.style.left, 10);
      this.carElement.style.left = left + 5 + "px";
    }
  }
}
// Cum folosim clasa Car?
const car1 = new Car("red");
// car1.show(document.body); // sa afiseze masina pe ecran
const car2 = new Car("blue");

const carList = [car1, car2];

carList.forEach((car) => car.show(document.body));
// const car2 = new Car("blue");
// car2.show(document.body);
// cand apasam arrow right merge in dreapta
// Sa asculta cand userul apasa arrow right
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    carList.forEach((car) => {
      car.moveRight();
    });
  }
});

const btnGenerateCar = document.getElementById("generate-car");

btnGenerateCar.addEventListener("click", function () {
  const car = new Car("blue");
  carList.push(car);
  car.show(document.body);
});
