const GamePiece = require('./GamePiece');

class Ammo extends GamePiece {
  constructor(x, y, height, width) {
    super(x, y, width, height);

  }
}

module.exports = Ammo;