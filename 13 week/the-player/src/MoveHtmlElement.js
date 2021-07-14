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

export default MoveHtmlElement;