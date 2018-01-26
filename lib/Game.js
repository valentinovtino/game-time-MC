const Missile = require('./Missile.js');
const Block = require('./Block.js');
const Cannon = require('./Cannon.js');
const City = require('./City.js');

class Game {
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.animationFrame = this.animationFrame.bind(this);
    this.block1 = new Block(10, 570, 25, 25);
    this.block2 = new Block(760, 570, 25, 25);
    this.block3 = new Block(400, 570, 25, 25);
    this.blocks = [ this.block1, this.block2, this.block3 ];
    this.city1 = new City (153, 520, 25, 75);
    this.city2 = new City (196, 520, 25, 75);
    this.city3 = new City (239, 520, 25, 75);
    this.city4 = new City (543, 520, 25, 75);
    this.city5 = new City (586, 520, 25, 75);
    this.city6 = new City (629, 520, 25, 75);
    this.Cities = [this.city1, this.city2, this.city3, this.city4, this.city5, this.city6];
    this.Missiles = [];
    this.createMissiles = this.createMissiles.bind(this)
  }

  startGame() {
    this.drawCannnon(this.context)
    this.animationFrame();
    this.fireMissiles()
    this.drawCities(this.context)
    // requestAnimationFrame(this.animationFrame);
  }

  drawCannnon(context) {
      this.blocks.forEach((block)=> {
        block.erase(context).draw(context);
    })
  }

  drawCities(context) {
        this.Cities.forEach((city) => {
      city.erase(context).draw(context);
    })
  }

  fireMissiles() {
    var intervalID;
    var intervalID = window.setInterval(this.createMissiles, 1000);
  }

  createMissiles(canvas) {
    if (this.Missiles.length <= 8) {
      for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * Math.floor(780))
        var y = Math.floor(Math.random() * Math.floor(2)) * -2

        console.log('Missile Array: ' + this.Missiles)
        this.missile = new Missile(x, y, 1, 10)

        this.Missiles.push(this.missile)
      }
      return this.Missiles;
    } else {
      console.log('stop')
    }
  }

  populateMissiles() {
      this.Missiles.forEach((missile) =>{
      missile.erase(this.context).draw(this.context)
      missile.move()  
    })
  }

  animationFrame() {
   this.populateMissiles();

    requestAnimationFrame(this.animationFrame);
  }
}

module.exports = Game;