const GamePiece = require('./GamePiece');

class Missile extends GamePiece {
  constructor(x, y, width, height, targetX, 
    targetY, userTargetX, userTargetY, src) {
    super(x, y, width, height, src)
    this.targetX = targetX;
    this.targetY = targetY;
    this.hasArrived = false; 
    this.userTargetX = userTargetX;
    this.userTargetY = userTargetY;
    this.dy = 0;
    this.dx = 0;
    this.hasCollided = false;
  }

  move() {
    if (this.y > this.targetY) {
      this.hasArrived = true;
    }

    const oppositeLine = this.targetY - this.y;
    const adjacentLine = this.targetX - this.x;
    const angle = Math.atan(oppositeLine / adjacentLine);
        
    this.dx = Math.cos(angle);
    this.dy = Math.sin(angle);

    if (this.targetX < this.x) {
      this.dy = -this.dy;
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy; 
    return this;
  }
}


module.exports = Missile;
