import Player from './Player';
import Monster from './Monster';

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
      monster.show(this.map, top, left);
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

export default Game;