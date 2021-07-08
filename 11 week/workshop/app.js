// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer
// 2.  Player sa poate misca in toate directile
// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// Facem o clasa Player 
// 1. Va crea div html si il va afisa pe ecran
// 2. Mutam logica de miscare in clasa

class Player {
  static STEP = 40;

  static createPlayer() {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.style.top = "200px";
    playerDiv.style.left = "0px";
    // nu avem acces la this
    return playerDiv;

  }

  static isPlayerInMap(top, left) {
    if (
      top >= 0 &&
      top <= 400 - Player.STEP &&
      left >= 0 &&
      left <= 400 - Player.STEP
    ) {
      return true;
    }
    return false;
  }

  show(map) {
    this.playerDiv = Player.createPlayer();
    map.append(this.playerDiv)
  }

  moveUp() {
    const top = parseInt(this.playerDiv.style.top, 10);
    const nextTop = top - Player.STEP;
    if (Player.isPlayerInMap(nextTop, 200)) {
      this.playerDiv.style.top = nextTop + "px";
    }
  }
  moveDown() {
    const top = parseInt(this.playerDiv.style.top, 10);
    const nextTop = top + Player.STEP;
    if (Player.isPlayerInMap(nextTop, 200)) {
      this.playerDiv.style.top = nextTop + "px";
    }
  }

  moveLeft() {
    const left = parseInt(this.playerDiv.style.left, 10);
    const nextLeft = left - Player.STEP;
    if (Player.isPlayerInMap(200, nextLeft)) {
      this.playerDiv.style.left = nextLeft + "px";
    }
  }
  moveRight() {
    const left = parseInt(this.playerDiv.style.left, 10);
    const nextLeft = left + Player.STEP;
    if (Player.isPlayerInMap(200, nextLeft)) {
      this.playerDiv.style.left = nextLeft + "px";
    }
  }

}

const playerCls = new Player();
// Locul unde va fi afisat
const map = document.querySelector('.map');
playerCls.show(map)

document.addEventListener("keydown", function (event) {

  // putem face o functie care sa returneze top,left modificat
  switch (event.key) {
    case "ArrowUp":
      playerCls.moveUp();
      break;
    case "ArrowDown":
      playerCls.moveDown()
      break;
    case "ArrowLeft":
      playerCls.moveLeft()
      break;
    case "ArrowRight":
      playerCls.moveRight()
      break;
    default:
  }

});
