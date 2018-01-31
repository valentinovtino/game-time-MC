const GamePiece = require('./GamePiece');

class City extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
  }

}

module.exports = City;