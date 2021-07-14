
class Monster {
  static STEP = 10;
  constructor(type) {
    this.type = type;
  }

  static create(type, top, left) {
    const imgMonster = document.createElement('img')
    imgMonster.src = `./assets/monster/monster${type}.svg`;
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

  moveUp() {
  
  }

}

export default Monster;