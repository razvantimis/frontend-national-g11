// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer
// 2.  Player sa poate misca in toate directile
// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// Task1: Facem in html
// Mapa va fi un div de 400x400
// Jocutorul un div - 10x10

// Task2: cum putem misca playerul?
// Solutia: folosim position absolute si modificam top & left

// Task3: listen to user arrow up/down/right/left
// Task4: La Arrow up vom facem update la css top de la div player
// Task5: Cum putem preveni player sa iasa din map

var listOb = [{ top: 10, left: 30 }];

function isPlayerInMap(top, left, stepPx) {
  if (top >= 0 && top <= 400 - stepPx && left >= 0 && left <= 400 - stepPx) {
    return true;
  }
  return false;
}

var player = document.querySelector(".player");

document.addEventListener("keydown", function (event) {
  var top = parseInt(player.style.top, 10);
  var left = parseInt(player.style.left, 10);
  var stepPx = 40;

  // putem face o functie care sa returneze top,left modificat
  switch (event.key) {
    case "ArrowUp":
      top = top - stepPx;
      break;
    case "ArrowDown":
      top = top + stepPx;
      break;
    case "ArrowLeft":
      left = left - stepPx;
      break;
    case "ArrowRight":
      left = left + stepPx;
      break;
    default:
  }

  if (isPlayerInMap(top, left, stepPx)) {
    player.style.top = top + "px";
    player.style.left = left + "px";
  }
});
