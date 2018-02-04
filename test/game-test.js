const assert = require('chai').assert;
const Missile = require('../lib/Missile.js');
const Block = require('../lib/Block.js');
// const City = require('../lib/City.js');
const Explosion = require('../lib/Explosion.js');
const UserMissile = require('../lib/userMissile.js');
const Game = require('../lib/Game')

describe('Game', () => {


  it('should instantiate our good friend, Game', () => {
    const game = new Game();

    assert.isFunction(Game);
    assert.isObject(game);
  });

    it('should take parameters for context, width and height', () => {
    const game = new Game(undefined, undefined, 800, 600);
    
    assert.equal(game.width, undefined, 800);
    assert.equal(game.height, undefined, 600);
  });

   it('should instantiate cannon', () => {
    const game = new Game();

    assert.isObject(game.cannon);
   })

   it('should have six cities in the Cities Array', () => {
     const game = new Game();

     assert.equal(game.Cities.length, 6);
   })

   it('should have a score default of zero', () => {
     const game = new Game();

     assert.equal(game.score, 0);
   })

   it('should start with empty arrays for Missiles, userMissiles, and explosions', () => {
     const game = new Game();

     assert.deepEqual(game.Missiles, [])
     assert.deepEqual(game.userMissiles, [])
     assert.deepEqual(game.explosions, [])
   })

   it('should start with gameOver and levelBeaten as false', () => {
      const game = new Game();

      assert.equal(game.gameOver, false)
      assert.equal(game.levelBeaten, false)
   })

  it('should start one level 1', () => {
    const game = new Game();

    assert.equal(game.level, 1)
  })

  it('should increment score by 15', () => {
    const game = new Game();

    game.score = 0 
    game.incrementScore()
    assert.equal(game.score, 15); 
  })

  it('should populate missiles', () => {
    const game = new Game();

    game.Missiles.length = 0; 
    game.createMissiles();
    assert.equal(game.Missiles.length, 6);
  })

})














