// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer
// 2.  Player sa poate misca in toate directile
// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// Facem o clasa Player 
// 1. Va crea div html si il va afisa pe ecran
// 2. Mutam logica de miscare in clasa

class Player {
  static STEP = 40;

  static create() {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.style.top = "200px";
    playerDiv.style.left = "0px";
    // nu avem acces la this
    return playerDiv;

  }

  // Logica de validare daca player iese din mapa
  // Returneaza true daca este inca in mapa altfel false
  static isInMap(top, left) {
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
    this.playerDiv = Player.create();
    map.append(this.playerDiv)
  }

  moveHtmlLogic(getNextTopAndNextLeft) {
    const top = parseInt(this.playerDiv.style.top, 10);
    const left = parseInt(this.playerDiv.style.left, 10);
    const { nextTop, nextLeft } = getNextTopAndNextLeft(top, left)
    if (Player.isInMap(nextTop, nextLeft)) {
      this.playerDiv.style.top = nextTop + "px";
      this.playerDiv.style.left = nextLeft + "px";
    }
  }

  moveUp() {
    this.moveHtmlLogic((top, left) => {
      const nextTop = top - Player.STEP;
      return {
        nextTop,
        nextLeft: left,
      }
    })
  }
  moveDown() {
    this.moveHtmlLogic((top, left) => {
      const nextTop = top + Player.STEP;
      return {
        nextTop: nextTop,
        nextLeft: left,
      }
    })
  }

  moveLeft() {
    this.moveHtmlLogic((top, left) => {
      const nextLeft = left - Player.STEP
      return {
        nextLeft,
        nextTop: top,
      }
    })
  }

  moveRight() {
    this.moveHtmlLogic((top, left) => {
      const nextLeft = left + Player.STEP
      return {
        nextLeft,
        nextTop: top,
      }
    });
  }

}

class Monster {
  constructor(type) {
    this.type = type;
  }

  static create(type, top, left) {
    const imgMonster = document.createElement('img')
    imgMonster.src = `./monster/monster${type}.svg`;
    imgMonster.style.width = "40px";
    imgMonster.style.position = "absolute";
    imgMonster.style.top = top + "px";
    imgMonster.style.left = left + "px";
    return imgMonster;
  }

  show(map, top, left) {
    const monster = Monster.create(this.type, top, left);
    map.append(monster)
  }

}


class Game {
  // Returneaza top si left random 
  static getRandomTopAndLeft() {
    const mapPositions = Game.getMapPositions();
    // console.log(mapPositions) // [0, 40, 80, 120, 160, 200, 240, 280, 320, 360]
    // General random poziti in arrayul mapPositions
    // mapPositions.length = 10 => randomIndexTop in [0..9]
    const randomIndexTop = Math.floor(Math.random() * mapPositions.length)
    const randomIndexLeft = Math.floor(Math.random() * mapPositions.length)
    // Obtinem valoarile de pe pozitile random
    const top = mapPositions[randomIndexTop];
    const left = mapPositions[randomIndexLeft];

    return {
      top,
      left
    }
  }
  // Genereaza un array cu toate pozitile posibile in mapa noastra
  static getMapPositions() {
    let array = [];
    for (let j = 0; j <= 360; j = j + 40) {
      array.push(j);
    }
    return array;
  }

  constructor(map) {
    this.map = map;
    this.player = new Player();
  }

  // Afiseaza toate tiputile de monstrii in map
  showAllMonsters() {
    const monsterTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    for (let index = 0; index < monsterTypes.length; index++) {
      const currentType = monsterTypes[index];
      const monster = new Monster(currentType);
      const { top, left } = Game.getRandomTopAndLeft();
      monster.show(map, top, left);
    }
  }

  registerMovementPlayer() {
    document.addEventListener("keydown", (event) => {
      // putem face o functie care sa returneze top,left modificat
      switch (event.key) {
        case "ArrowUp":
          this.player.moveUp();
          break;
        case "ArrowDown":
          this.player.moveDown()
          break;
        case "ArrowLeft":
          this.player.moveLeft()
          break;
        case "ArrowRight":
          this.player.moveRight()
          break;
        default:
      }

    });

  }

  start() {
    this.player.show(this.map);
    this.showAllMonsters();
    this.registerMovementPlayer();
  }
}

const map = document.querySelector('.map');

const game = new Game(map);
game.start()


