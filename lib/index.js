var Block = require('./Block.js');
var Enemy = require('./Enemy.js');
var Missile = require('./Missile.js')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block1 = new Block(10, 570, 25, 25);
var block2 = new Block(760, 570, 25, 25);

var blocks = [ block1, block2 ]; 

var Missiles = [];

var Enemies = [];

// function createEnemies(canvas) {
//   for (var i = 0; i < 16; i++) {
//     var x = 30 + (i % 16) * 30;
//     var y = 30 + (i % 2) * 30;

//     this.enemy = new Enemy(x, y, 50, 25);

//     Enemies.push(this.enemy)
    
//   }
//   return Enemies;
// } 

// createEnemies() 
  fireMissiles()

  // function fireMissiles() {
  //   setTimeout(createMissiles(), 3000)
  // }


var intervalID;
function fireMissiles() {
    var intervalID = window.setInterval(createMissiles, 1000);
}


function createMissiles(canvas) {
  if (Missiles.length <= 8) {
    for (var i = 0; i < 2; i++) {
      var x = Math.floor(Math.random() * Math.floor(780))
      var y = Math.floor(Math.random() * Math.floor(2)) * -2

      console.log('Missile Array: ' + Missiles)
      this.missile = new Missile(x, y, 1, 10)

      Missiles.push(this.missile)
    }
    return Missiles;
  } else {
    console.log('stop')
  }
}


function gameLoop () {

  Missiles.forEach((missile) =>{
    missile.erase(context).draw(context)
    missile.move()  
  })

  Enemies.forEach((enemy) => {
    enemy.erase(context).draw(context);
  })

  blocks.forEach((block)=> {
    
      block.erase(context).draw(context);
    
  })

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

