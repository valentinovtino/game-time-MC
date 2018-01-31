const assert = require('chai').assert;
const Missile = require('../lib/Missile.js');
const Block = require('../lib/Block.js');
const City = require('../lib/City.js');
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
    const game = new Game(800, 600);

    assert.equal(game.width, 800);
    assert.equal(game.height, 600);
  });


})