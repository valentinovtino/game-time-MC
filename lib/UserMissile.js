const Missile = require('./Missile.js');
const Explosion = require('./Explosion.js');


class UserMissile extends Missile {
  constructor(x, y, width, height, 
    targetX, targetY, userTargetX, userTargetY) {
    super(x, y, width, height)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.targetX = targetX;
    this.targetY = targetY;
    this.hasArrived = false; 
    this.userTargetX = userTargetX;
    this.userTargetY = userTargetY;
    this.dy = 0;
    this.dx = 0;
  }

  shoot() {
    if (this.y < this.userTargetY) {
      this.hasArrived = true;
    }

    const oppositeLine = this.userTargetY - this.y;
    const adjacentLine = this.userTargetX - this.x;
    const angle = Math.atan(oppositeLine / adjacentLine);
        
    this.dx = Math.cos(angle);
    this.dy = Math.sin(angle);

    if (this.userTargetX < this.x) {
      this.dy = -this.dy;
      this.dx = -this.dx;
    }

    this.x += this.dx * 4;
    this.y += this.dy * 4; 
    return this;
  }

  drawTrail(context) {
    context.beginPath();
    context.strokeStyle = '#DB4AE2';
    context.moveTo(410, 600);
    context.lineTo((this.x + (this.width / 2)), (this.y + (this.height / 2)));
    context.closePath();
    context.stroke();
    this.shoot();
    return this;
  }

  createExplode() {
    return new Explosion(this.userTargetX, this.userTargetY, 10);
  }

}

module.exports = UserMissile;