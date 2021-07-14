

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
    const indexOfAllDirections = Math.floor(Math.random()*allDirections.length);
    const direction = allDirections[indexOfAllDirections]
    return direction;
    
  }
  

  // Aici facem logica de miscare a monstrului
  // Si schimbare de directii
  // Solutia: 
  // 1. tot la 5 pasii se schimba directia 
  // - numarul de pasi facuti de monstru este defapt de cate ori apelam run
  //   - am pus pe this o proprietate stepCount
  // 2. Sa alegem random directia noua (excludem directia actuala)
  //  2.1 Sa alegem random o directie (excludem directia actuala) - facem o metoda
  //  2.2 Sa facem o metoda care primesc directia ca sa parametru si va misca monstru conform directiei
  run(){
    //  this.moveUp();
     this.stepCount +=1
     if (this.stepCount % 5 === 0){
        const direction = this.getRandomDirection();
      //  console.log('5 pasi')
       console.log(direction)
     }
  }
}

export default Monster;
