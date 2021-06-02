// Un timer 00:00:00 care isi face update in real time

// task1: Sa afisam in browser 00:00:00
// Sa avem in cod posibilitatea de a le face update pe rand

var hourElement = document.getElementById("hour");
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");

// task2: Sa facem update doar la secunde
// Task3: Sa afisam secundele
// Nu ne garanteaza rularea la fiecare sec
// for(var index = 0; index<60; index++){
//   console.log(index)
// }
var secondsCount = 0;
function updateSeconds() {
  secondsCount = secondsCount + 1;

  secondElement.innerText = secondsCount
}
setInterval(updateSeconds, 1000);
