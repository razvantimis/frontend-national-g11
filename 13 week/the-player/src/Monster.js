import MoveHtmlElement from './MoveHtmlElement'

const Direction = {
  Up: 'up',
  Down: 'down',
  Right: 'right',
  Left: 'left',
}
class Monster extends MoveHtmlElement {
  static STEP = 10;

  // Creaza prezentarea in html a unui monstru
  static create(type) {
    const imgMonster = document.createElement('img')
    imgMonster.src = `./assets/monster/monster${type}.svg`;
    imgMonster.style.width = "40px";

    return imgMonster;
  }

  constructor(type) {
    super(Monster.STEP, Monster.create(type))
    this.type = type;
    this.stepCount = 0;
    this.randomChangeDirectionStep = Math.floor(Math.random() * 20);
    this.currentDirection = this.getRandomDirection();
  }

  show(map, top, left) {
    this.htmlElement.style.top = top + "px";
    this.htmlElement.style.left = left + "px";

    map.append(this.htmlElement)
  }

  // Sa alegem random o directie (excludem directia actuala) - facem o metoda
  // Return Direction (de mai sus)
  getRandomDirection() {
    const allDirections = [Direction.Down, Direction.Up, Direction.Left, Direction.Right]
    const allDirectionsWithoutCurrentDirection = allDirections.filter((item) => {
      return item !== this.currentDirection
    })
    const indexOfAllDirections = Math.floor(Math.random() * allDirections.length);
    const direction = allDirectionsWithoutCurrentDirection[indexOfAllDirections]
    return direction;
  }


  // Aici facem logica de miscare a monstrului
  // Si schimbare de directii
  // Solutia: 
  // 1. tot la 5 pasi se schimba directia 
  // - numarul de pasi facuti de monstru este defapt de cate ori apelam run
  // - am pus pe this o proprietate stepCount
  // 2. Sa alegem random directia noua (excludem directia actuala)
  //  2.1 Sa alegem random o directie (excludem directia actuala) - facem o metoda
  //  2.2 Sa facem o metoda care primesc directia ca sa parametru si va misca monstru conform directiei
  run() {
    this.stepCount += 1
    if (this.stepCount % this.randomChangeDirectionStep === 0) {
      this.currentDirection = this.getRandomDirection();
    }
    this.moveDirection();
  }

  moveDirection() {
    switch (this.currentDirection) {
      case Direction.Up:
        this.moveUp();
        break;
      case Direction.Down:
        this.moveDown();
        break;
      case Direction.Left:
        this.moveLeft();
        break;
      case Direction.Right:
        this.moveRight();
        break;
      // default:
        // no currentDirection
    }
  }
}

export default Monster;
