const GamePiece = require('./GamePiece');

class Missile extends GamePiece {
  constructor(x, y, width, height, dy, dx){
    super(x, y, width, height)
    this.x = x;
    this.y = y;
    this.width= width;
    this.height = height;
    // this.dy = dy;
    // this.dx = dx;
    this.pause = undefined; 
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y++;
    return this
  }

  erase(context) {
    context.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }
}


module.exports = Missile;
