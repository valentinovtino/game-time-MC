const GamePiece = require('./GamePiece');

class Enemy extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x++;
    this.y++;
    return this
  }

  erase(context) {
    context.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }

}

module.exports = Enemy;