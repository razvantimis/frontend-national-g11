// Un timer 00:00:00 care isi face update in real time

// task1: Sa afisam in browser 00:00:00
// Sa avem in cod posibilitatea de a le face update pe rand

var hoursElement = document.getElementById("hour");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

// task2: Sa facem update doar la secunde
// Task3: Sa afisam secundele
// Task4: Sa facem update la minute + reset la secunde
// Nu ne garanteaza rularea la fiecare sec
// for(var index = 0; index<60; index++){
//   console.log(index)
// }
var minutesCount = 59;
var secondsCount = 55;
var hoursCount = 0;
function updateSeconds() {
  secondsCount = secondsCount + 1;

  if (secondsCount === 60) {
    secondsCount = 0;
    minutesCount++;
  }
  if (minutesCount === 60) {
    minutesCount = 0;
    hoursCount++;
  }

  if (secondsCount < 10) {
    secondsElement.innerText = "0" + secondsCount;
  } else {
    secondsElement.innerText = secondsCount;
  }
  minutesElement.innerText =
    minutesCount < 10 ? "0" + minutesCount : minutesCount;
  hoursElement.innerText = hoursCount < 10 ? "0" + hoursCount : hoursCount;
}

// 1. Adaugati un button plus functionalitate pentru start timer
let btnCount = 0;
let intervalId;
const btnStart = document.getElementById('start');
btnStart.addEventListener('click', function () {
  if (btnCount < 1) {
    intervalId = setInterval(updateSeconds, 1000);
  }
  btnCount++;
})

// 2. Adaugati un button plus functionalitate pentru stop timer

const btnStop = document.getElementById('stop');
btnStop.onclick = function () {
  clearInterval(intervalId);
  btnCount = 0;
}