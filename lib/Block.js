const GamePiece = require('./GamePiece');

class Block extends GamePiece {
  constructor (x, y, width, height) {
    super(x, y, width, height)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move() {
    this.x++;
    this.y++;
    return this
  }


}


module.exports = Block;