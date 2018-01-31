const assert = require('chai').assert;

const Explosion = require('../lib/Explosion.js');
const Game = require('../lib/Game')

describe ('Explosion', () => {

    it('should instantiate our good friend, Explosion', () => {
    const explosion = new Explosion();

    assert.isFunction(Explosion);
    assert.isObject(explosion);
  });
      it('should take parameters for x and y', () => {
    const explosion = new Explosion(300, 300);

    assert.equal(explosion.x, 300);
    assert.equal(explosion.y, 300);
  });
        it('should take parameters for radius and maxRadius', () => {
    const explosion = new Explosion(300, 300, 20);

    assert.equal(explosion.radius, 20);
    assert.equal(explosion.maxRadius, 50);    
  });

    it('should have a property of isExploded with a default of false', () => {
    const explosion = new Explosion();

    assert.equal(explosion.isExploded, false);
  });
})