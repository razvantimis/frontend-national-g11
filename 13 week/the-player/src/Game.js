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
    const monsterTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    // const monsterTypes = [1]
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

  // Monstru se misca random prin container ( cauta playerul )
  // Solutia2: Se misca in continu dar isi schimba directia la un momendat
  // - daca monstru face x numar de pasii atunci sa schimbam directia

  monstersStart() {
    this.gameIntervalId = setInterval(() => {
      // Parcurge lista de monstri si le spuna sa pornesca la fiecare 300ms
      this.monsterList.forEach(monster => {
        monster.run();
      });
      /// aici verificam daca este gameOver
      if (this.isPlayerIntersectWithMonster()) {
        console.log('Game over');
        clearInterval(this.gameIntervalId);
        alert('Game over')
      }
    }, 300)
  }

  // Verifica daca player este in acelasi loc cu un monstru 
  // Returneaza true daca da
  isPlayerIntersectWithMonster() {
    // Cum obtiem cordonatele de la player si monstru
    const playerCordonates = this.player.getCordonates();
    const monstersCordonates = this.monsterList.map(monster => {
      return monster.getCordonates();
    });

    // Vream sa stim daca unul dintre monstri se intersecteaza cu playerule

    const isIntersect = monstersCordonates.some(monsterCordonates => {
      // daca un monstru se intersecteaza cu playerul
      if (
        monsterCordonates.top === playerCordonates.top &&
        monsterCordonates.left === playerCordonates.left
      ) {
        return true;
      }
      return false;
    })

    return isIntersect;


  }

  start() {
    this.player.show(this.map);
    this.showAllMonsters();
    this.registerMovementPlayer();
    this.monstersStart()
  }
}

export default Game;