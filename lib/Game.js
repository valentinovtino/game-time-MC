const Missile = require('./Missile.js');
const Block = require('./Block.js');
const City = require('./City.js');
const Explosion = require('./Explosion.js');
const UserMissile = require('./userMissile.js');

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
    this.Buildings = [...this.Cities, ...this.blocks];
    this.createMissiles = this.createMissiles.bind(this);
    this.userMissiles = [];
    this.explosions = [];
  }

  startGame() {
     // console.log("userMissiles: " + this.userMissiles);
    // console.log('buildings: ' + this.Buildings)
    this.drawCannnon(this.context)
    this.animationFrame();
    this.fireMissiles()
    this.drawCities(this.context)
   this.populateMissiles(); 

    // requestAnimationFrame(this.animationFrame);
  }

  drawCannnon(context) {
      this.blocks.forEach((block)=> {
        block.draw(context);
    })
  }

  drawCities(context) {
        this.Cities.forEach((city) => {
      city.erase(context).draw(context);
    })
  }

  // ----------------- Test

  // removeUserMissile() {
  //   // console.log(this.userMissiles)
  //   this.userMissiles.forEach((missile, index) => {   
  //     // console.log(this.userMissiles)
  //     if(missile.hasArrived == true) {
  //       // console.log(missile.hasArrived)
  //       this.userMissiles.splice(index, 1);
  //       missile.width = 0;
  //       missile.height = 0;
  //       // missile.erase(this.context)
  //     }
  //   })
  //   // console.log(this.userMissiles)

  // }
   




  // -----------------

  fireMissiles() {
    var intervalID;
    var intervalID = window.setInterval(this.createMissiles, 10);
    // this.userAttack(this.canvas)
  }

  createMissiles(canvas) {
    if (this.Missiles.length <= 9) {
        for (var i = 0; i < this.Buildings.length; i++)  {
          var targetIndex = Math.floor(Math.random() * this.Buildings.length)
          var targetX = this.Buildings[targetIndex].x + this.Buildings[targetIndex].width/2
          var targetY = this.Buildings[targetIndex].y
        }

        let x = Math.floor(Math.random() * Math.floor(780))
        let y = Math.floor(Math.random() * Math.floor(2)) * -2

        this.missile = new Missile(x, y, 1, 10, targetX, targetY)
        this.Missiles.push(this.missile)

      return this.Missiles;
    } else {
      return;
    }
  }

  populateMissiles() {
      this.Missiles.forEach((missile) =>{
      missile.erase(this.context).draw(this.context)
      missile.move()  
    })
  }

  userAttack(eventObject) {
    if(this.userMissiles.length <= 9) {
      let userTargetX = eventObject.userTargetX
      let userTargetY = eventObject.userTargetY
      // console.log(userTargetX, userTargetY)

      // let x = Math.floor(Math.random() * Math.floor(2)) * -2
      // let y = Math.floor(Math.random() * Math.floor(300))

      let x = 410
      let y = 600

      this.userAmmo = new UserMissile(x, y, 15, 15,null, null, userTargetX, userTargetY,);
      this.userMissiles.push(this.userAmmo);

      // console.log("user missiles: " + this.userMissiles)

    return this.userMissiles
   } else {
    return;
   }

  }

  populateAttack() {
    this.userMissiles.forEach((missile) => {
      if(!missile.hasArrived) {
      // missile.erase(this.context);
      missile.draw(this.context);
      missile.drawTrail(this.context);
    }
      else if(missile.hasArrived === true) {
        // console.log('BOOOOOOOOOOOOOOOM')
        this.explosions.push(missile.explode())
      }
    })
  }

  drawExplosion(context) {
    this.explosions.forEach(explosion => {
      // explosion.erase(this.context);
      explosion.explode(this.context)
    })
  }

  animationFrame() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

   this.drawExplosion(this.context); 
   this.populateMissiles(); 
   this.drawCannnon(this.context);
   this.drawCities(this.context);
   this.populateMissiles();
   this.populateAttack();
   // this.removeUserMissile()

    requestAnimationFrame(this.animationFrame);
  }
}

module.exports = Game;