// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer
// 2.  Player sa poate misca in toate directile
// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// Facem o clasa Player 
// 1. Va crea div html si il va afisa pe ecran
// 2. Mutam logica de miscare in clasa

class MoveHtmlElement {
  constructor(step, htmlElement) {
    this.step = step;
    this.htmlElement = htmlElement;
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = "0px";
    this.htmlElement.style.left = "0px";

  }

  // Logica de validare daca player iese din mapa
  // Returneaza true daca este inca in mapa altfel false
  static isInMap(top, left, step) {
    if (
      top >= 0 &&
      top <= 400 - step &&
      left >= 0 &&
      left <= 400 - step
    ) {
      return true;
    }
    return false;
  }

  moveHtmlLogic(getNextTopAndNextLeft) {
    const top = parseInt(this.htmlElement.style.top, 10);
    const left = parseInt(this.htmlElement.style.left, 10);
    const { nextTop, nextLeft } = getNextTopAndNextLeft(top, left)
    if (MoveHtmlElement.isInMap(nextTop, nextLeft, this.step)) {
      this.htmlElement.style.top = nextTop + "px";
      this.htmlElement.style.left = nextLeft + "px";
    }
  }

  moveUp() {
    this.moveHtmlLogic((top, left) => {
      const nextTop = top - this.step;
      return {
        nextTop,
        nextLeft: left,
      }
    })
  }
  moveDown() {
    this.moveHtmlLogic((top, left) => {
      const nextTop = top + this.step;
      return {
        nextTop: nextTop,
        nextLeft: left,
      }
    })
  }

  moveLeft() {
    this.moveHtmlLogic((top, left) => {
      const nextLeft = left - this.step
      return {
        nextLeft,
        nextTop: top,
      }
    })
  }

  moveRight() {
    this.moveHtmlLogic((top, left) => {
      const nextLeft = left + this.step
      return {
        nextLeft,
        nextTop: top,
      }
    });
  }

}
class Player extends MoveHtmlElement {
  static create() {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.style.top = "200px";
    playerDiv.style.left = "0px";
    // nu avem acces la this
    return playerDiv;

  }

  constructor() {
    super(40, Player.create())
  }

  show(map) {
    map.append(this.htmlElement)
  }
}

class Monster {
  static STEP = 10;
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
    this.monster = Monster.create(this.type, top, left);
    map.append(this.monster)
  }

  moveHtmlLogic(getNextTopAndNextLeft) {
    const top = parseInt(this.monster.style.top, 10);
    const left = parseInt(this.monster.style.left, 10);
    const { nextTop, nextLeft } = getNextTopAndNextLeft(top, left)
    if (Player.isInMap(nextTop, nextLeft)) {
      this.monster.style.top = nextTop + "px";
      this.monster.style.left = nextLeft + "px";
    }
  }

  moveUp() {
    this.moveHtmlLogic((top, left) => {
      const nextTop = top - Monster.STEP;
      return {
        nextTop,
        nextLeft: left,
      }
    })
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
    this.monsterList = []
    // const monsterTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const monsterTypes = [1]
    for (let index = 0; index < monsterTypes.length; index++) {
      this.monsterList.push(new Monster(monsterTypes[index]))
    }
  }

  // Afiseaza toate tiputile de monstrii in map
  showAllMonsters() {
    this.monsterList.forEach(monster => {
      const { top, left } = Game.getRandomTopAndLeft();
      monster.show(map, top, left);
    })
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

  monstersRun() {
    setInterval(() => {
      // Cum putem accesa mostrii
      this.monsterList.forEach(monster => {
        monster.moveUp();
      });
    }, 300)
  }

  start() {
    this.player.show(this.map);
    this.showAllMonsters();
    this.registerMovementPlayer();
    this.monstersRun()
  }
}
// Monstru se misca random prin container ( cauta playerul )
// Solutia2: Se misca in continu dar isi schimba directia la un momandat
const map = document.querySelector('.map');

const game = new Game(map);
game.start()


function exempleCuMoveHtml() {
  const myDiv = document.createElement('div');
  myDiv.innerText = "sunt aici"
  myDiv.style.backgroundColor = "red";
  map.append(myDiv);

  const moveDiv = new MoveHtmlElement(1, myDiv);
  
  moveDiv.moveDown()
  moveDiv.moveDown()


  setInterval(() => {
    moveDiv.moveDown()
  }, 50)
}
exempleCuMoveHtml()


