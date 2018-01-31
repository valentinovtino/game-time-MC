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
    this.gameOver = false;
    this.score = 0;
    this.populateAttack = this.populateAttack.bind(this)
    this.drawExplosion = this.drawExplosion.bind(this)
  }

  incrementScore() {
    this.score += 15;
    var scoreDisplay = document.getElementById('score-num');

    scoreDisplay.innerText = this.score;
  }

  startGame() {
    this.drawCannnon(this.context)
    this.animationFrame(); 
    this.fireMissiles()
    this.drawCities(this.context)
   this.populateMissiles(); 
  }

  gameOver() {
    if(this.Buildings.length === 0 ) {
      this.gameOver = false;
    }
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

        this.missile = new Missile(x, y, 10, 10, targetX, targetY)
        this.Missiles.push(this.missile)

      return this.Missiles;
    } else {
      return;
    }
  }

  populateMissiles() {
      this.Missiles.forEach((missile) =>{
        if(!missile.hasCollided) {
          // console.log("false missile")
      missile.draw(this.context)
      missile.move()  
    }
    //  else if(missile.hasArrived === true){
    //   this.explosions.push(missile.explode())
    // }
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
    this.userMissiles.forEach((missile, i) => {
      if(missile.hasArrived === false) {
      // missile.erase(this.context);
      missile.draw(this.context);
      missile.drawTrail(this.context);
    }
      else if(missile.hasArrived === true) {
        if(this.userMissiles.length > this.explosions.length) {
          this.explosions.push(missile.createExplode())
        }
        console.log('BOOOOOOOOOOOOOOOM')
        this.explosions[i].radius += 5
      }
    })
  }

  // exploded() {
  //   this.userMissiles.forEach((missile) => {
  //     if(missile.hasArrived === true) {
  //       console.log('BOOOOOOOOOOOOOOOM')
  //       this.explosions.push(missile.explode())
  //     }
  //   })
  // }

  drawExplosion(context) {
    this.explosions.forEach((explosion, i) => {
      // if(explosion.stopBoom === false) {
        // console.log(explosion)
      // explosion.erase(this.context);
      explosion.explode(this.context)
      explosion.boom()
        // console.log(explosion.hasCollided)
      // }
      if(explosion.stopBoom === true ) {
      // console.log(explosion)
        console.log(this.explosions.length)
        this.explosions = [...this.explosions.slice(0,i), ...this.explosions.slice(i + 1)];
        this.userMissiles = [...this.userMissiles.slice(0,i), ...this.userMissiles.slice(i + 1)];
        console.log(this.explosions.length)

      }
    })
  }

    missileExplosionCollision(missile) {
    this.explosions.forEach((explosion) => {
      if (missile.y <= (explosion.y + explosion.radius) &&
          missile.y >= (explosion.y - explosion.radius) &&
          missile.x <= (explosion.x + explosion.radius) && 
          missile.x >= (explosion.x - explosion.radius)) {
        missile.hasCollided = true;
      // console.log(missile)
      }
    });
  }

  // cannonCollision(){
  //   this.explosions.forEach((explosion) => {
  //     if (this.block3.y <= (explosion.y + explosion.radius) && 
  //       this.block3.y >= (explosion.y - explosion.radius) &&
  //       this.block3.x <= (explosion.x + explosion.radius) &&
  //       this.block3.x >= (explosion.x - explosion.radius)) {
  //       this.block3.width = 0;
  //       console.log('bye felica')
  //       }
  //   })
  // }

  cannonCollision(missile, i){
    // console.log(this.Buildings)
    this.Missiles.forEach((missile) => {
      if (this.block3.y <= missile.y &&
        this.block3.x <= missile.x) {
        this.blocks.splice(i, 1);
        // console.log(this.Buildings)
        // console.log("I'm in")
        }
    })
  }



  animationFrame() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

   this.cannonCollision(this.missile);
   this.missileExplosionCollision(this.missile);
   this.drawExplosion(this.context); 
   this.populateMissiles(); 
   this.drawCannnon(this.context);
   this.drawCities(this.context);
   this.populateMissiles();
   this.populateAttack();
   // this.removeUserMissile()
   // console.log(this.explosions);
    requestAnimationFrame(this.animationFrame);
  }
}

module.exports = Game;