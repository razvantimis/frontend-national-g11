// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer
// 2.  Player sa poate misca in toate directile
// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// Facem o clasa Player 
// 1. Va crea div html si il va afisa pe ecran
// 2. Mutam logica de miscare in clasa

class Player {
  static STEP = 40;
  show(map) {
    this.playerDiv = document.createElement('div');
    this.playerDiv.classList.add('player');
    this.playerDiv.style.top = "200px";
    this.playerDiv.style.left = "0px";

    map.append(this.playerDiv)
  }

  moveUp() {
    const top = parseInt(this.playerDiv.style.top, 10);
    const nextTop = top - Player.STEP;
    if (isPlayerInMap(nextTop, 200, Player.STEP)) {
      this.playerDiv.style.top = nextTop + "px";
    }
  }
  moveDown() {

  }

  moveLeft() {

  }

  moveRight() {

  }
}

const playerCls = new Player();
// Locul unde va fi afisat
const map = document.querySelector('.map');
playerCls.show(map)


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
      // top = top - stepPx;
      playerCls.moveUp();
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

  // if (isPlayerInMap(top, left, stepPx)) {
  //   player.style.top = top + "px";
  //   player.style.left = left + "px";
  // }
});
