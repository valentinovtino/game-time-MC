const GamePiece = require('./GamePiece');

class Block extends GamePiece {
  constructor (x, y, width, height) {
    super(x, y, width, height)
  }

  move() {
    this.x++;
    this.y++;
    return this
  }


}


module.exports = Block;