class GamePiece {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  erase(context) {
    context.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = 'rgb(197,179,88)' 
    return this;
  }

}

module.exports = GamePiece;