const Missile = require('./Missile.js');
const Block = require('./Block.js');
// const City = require('./City.js');
const UserMissile = require('./userMissile.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.animationFrame = this.animationFrame.bind(this);
    this.cannon = new Block(400, 570, 25, 25);
    this.city1 = new Block (50, 520, 25, 75);
    this.city2 = new Block (150, 520, 25, 75);
    this.city3 = new Block (239, 520, 25, 75);
    this.city4 = new Block (543, 520, 25, 75);
    this.city5 = new Block (625, 520, 25, 75);
    this.city6 = new Block (750, 520, 25, 75);
    this.Cities = [this.city1, this.city2, this.city3, 
      this.city4, this.city5, this.city6];
    this.Missiles = [];
    this.userMissiles = [];
    this.explosions = [];
    this.gameOver = false;
    this.level = 1;
    this.levelBeaten = false;
    this.score = 0;
    this.populateAttack = this.populateAttack.bind(this)
    this.drawExplosion = this.drawExplosion.bind(this)
    this.intervalID = 0;
  }

  incrementScore() {
    this.score += 15;
  }

  showScore() {
    var scoreDisplay = document.getElementById('score-num');

    scoreDisplay.innerText = this.score;
  }

  showCity() {
    var cityDisplay = document.getElementById('cities-num');

    cityDisplay.innerText = this.Cities.length;
  }

  showLevel() {
    var levelDisplay = document.getElementById('level-num');

    levelDisplay.innerText = this.level;
  }

  startGame() {
    this.drawCannnon(this.context)
    this.animationFrame(); 
    this.createMissiles();
    this.drawCities(this.context);
  }

  drawCannnon(context) {
    this.cannon.draw(context);
  }

  drawCities(context) {
    this.Cities.forEach((city) => {
      city.erase(context).draw(context);
    })
  }

  createMissiles() {
    for (var i = 0; i < 6 * this.level; i++)  {
      var targetIndex = Math.floor(Math.random() * this.Cities.length)
      var targetX = this.Cities[targetIndex].x + 
        this.Cities[targetIndex].width / 2
      var targetY = this.Cities[targetIndex].y

      let x = Math.floor(Math.random() * Math.floor(780))
      let y = Math.floor(Math.random() * Math.floor(2)) * -2

      this.missile = new Missile(x, y, 10, 10, targetX, targetY)
      this.Missiles.push(this.missile)
    }
    return this.Missiles;
  }

  populateMissiles() {
    this.Missiles.forEach((missile) =>{
      missile.draw(this.context)
      missile.move()  
    })
  }

  userAttack(eventObject) {
    let userTargetX = eventObject.userTargetX
    let userTargetY = eventObject.userTargetY
    let x = 410
    let y = 600

    this.userAmmo = new UserMissile(x, y, 15, 15, 
      null, null, userTargetX, userTargetY);
    this.userMissiles.push(this.userAmmo);
    return this.userMissiles
  }

  populateAttack() {
    this.userMissiles.forEach((missile, i) => {
      if (missile.hasArrived === false) {
        missile.draw(this.context);
        missile.drawTrail(this.context);
      } else if (missile.hasArrived === true) {
        if (this.userMissiles.length > this.explosions.length) {
          this.explosions.push(missile.createExplode())
        }
        this.userMissiles = [...this.userMissiles.slice(0, i), 
          ...this.userMissiles.slice(i + 1)];
        if (this.userMissiles.length === this.explosions.length) {
          this.explosions[i].radius += 5;
        }
      }
    })
  }

  drawExplosion() {
    this.explosions.forEach((explosion, i) => {
      explosion.explode(this.context)
      explosion.boom()
      if (explosion.stopBoom === true ) {
        this.explosions = [...this.explosions.slice(0, i), 
          ...this.explosions.slice(i + 1)];
      }
    })
  }

  missileExplosionCollision() {
    this.explosions.forEach((explosion) => {
      this.Missiles.forEach((missile, i) => {
        if (missile.y <= (explosion.y + explosion.radius) &&
          missile.y >= (explosion.y - explosion.radius) &&
          missile.x <= (explosion.x + explosion.radius) &&
          missile.x >= (explosion.x - explosion.radius)) {
          missile.hasCollided = true;
          this.Missiles.splice(i, 1)
          this.incrementScore();
        }
      })
    });
  }

  cityCollision() {
    this.Missiles.forEach((missile, i) => {
      if (missile.y >= missile.targetY) {
        this.Cities.forEach((city, i) => {  
          if (city.x + city.width / 2 === missile.targetX) {
            this.Cities.splice(i, 1);
          }
        })
        this.Missiles.splice(i, 1);
      }
    })
  }

  wins() {
    if (this.Missiles.length === 0 && this.score > 0 && 
        this.Cities.length >= 1) {
      this.level += 1;
      this.createMissiles()
      this.levelBeaten = true;
    }
  }

  stopGame() {
    if (this.Cities.length === 0 ) {
      this.gameOver = true;
    }
  }

  newLevelScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = '48px Bungee';
    this.context.fillText('NEXT LEVEL', 260, 220);
    this.context.fillText('click to play', 225, 270);
  }

  gameWonScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = '48px Bungee';
    this.context.fillText('YOU WON!', 285, 270);
  }

  transitions() {
    if (this.gameOver === true) {
      this.context.font = '48px Bungee';
      this.context.fillText('Game Over', 265, 300);
      return true;
    }
    if (this.levelBeaten === true) {
      this.newLevelScreen();
      return true;
    }
  }

  levelUp() {
    this.populateMissiles();
    this.missileExplosionCollision();
    this.cityCollision();
    this.stopGame();
    this.wins();
  }

  animationFrame() {
    var transition = this.transitions();

    if (transition === true) {
      return;
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawExplosion(this.context); 
    this.drawCannnon(this.context);
    this.drawCities(this.context);
    this.populateAttack();
    this.showCity();
    this.levelUp();
    this.showLevel();
    this.showScore();

    requestAnimationFrame(this.animationFrame);
  }
}

module.exports = Game;