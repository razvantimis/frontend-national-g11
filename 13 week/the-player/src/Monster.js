

import MoveHtmlElement from './MoveHtmlElement'
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
  }

  show(map, top, left) {
    this.htmlElement.style.top = top + "px";
    this.htmlElement.style.left = left + "px";

    map.append(this.htmlElement)
  }
}

export default Monster;
