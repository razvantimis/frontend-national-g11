
// - Sa afisam o masina si cand apasam arrow right merge in dreapta
//    - Facem o clasa Car
//    -
class Car {

  // Afiseaza masina pe ecran
  show(parentEl) {

    // Creeam imaginea
    // <img src="./car.svg" width="100px"> 
    const imgEl = document.createElement('img');
    imgEl.src = "./car.svg";
    imgEl.style.width = "100px";
    imgEl.style.display = "block";

    parentEl.append(imgEl)
  }

}
// Cum folosim clasa Car?
const car1 = new Car();
car1.show(document.body); // sa afiseze masina pe ecran
const car2 = new Car();
car2.show(document.body)
// cand apasam arrow right merge in dreapta
// 
document.addEventListener('keydown', function (event) {
  console.log(event)
})