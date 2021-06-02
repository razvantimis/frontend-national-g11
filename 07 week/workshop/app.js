// Un timer 00:00:00 care isi face update in real time

// task1: Sa afisam in browser 00:00:00
// Sa avem in cod posibilitatea de a le face update pe rand

var hourElement = document.getElementById("hour");
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");

// task2: Sa facem update doar la secunde
// Task3: Sa afisam secundele
// Task4: Sa facem update la minute + reset la secunde
// Nu ne garanteaza rularea la fiecare sec
// for(var index = 0; index<60; index++){
//   console.log(index)
// }
var minutesCount = 0;
var secondsCount = 55;
function updateSeconds() {
  secondsCount = secondsCount + 1;

  // secondElement.innerText = secondsCount < 10 ? "0" + secondsCount: secondsCount
  if (secondsCount === 60) {
    secondsCount = 0;
    minutesCount++;

    minuteElement.innerText =
      minutesCount < 10 ? "0" + minutesCount : minutesCount;
  }

  if (secondsCount < 10) {
    secondElement.innerText = "0" + secondsCount;
  } else {
    secondElement.innerText = secondsCount;
  }
}
setInterval(updateSeconds, 1000);

// console.log("sadsa");
