const GamePiece = require('./GamePiece');

class Explosion extends GamePiece {
   constructor(x, y, radius) {
    super(x, y);
    this.radius = 20;
    this.maxRadius = 50;
    this.step = 1;
  }

   explode(context) {
    // console.log("sdashdajsdhkashdaskjshdashdas")
    context.save()
    context.beginPath()
    context.arc((this.x + 2.5), (this.y + 2.5), this.radius, 0, (Math.PI * 2));
    context.stroke()
    context.fillStyle = 'rgb(104,211,255)'
    context.fill();
    context.closePath();
    context.restore();
    this.boom()
    return this;

  }

  boom(context) {
    if ( this.radius > 0) {
      this.radius += this.step};
    if(this.radius > this.maxRadius) {
      this.step = - this.step
    }
  }

  collision() {
    
  }


}

module.exports = Explosion;