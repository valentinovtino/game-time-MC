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
    assert.equal(explosion.maxRadius, 30);    
  });

    it.skip('should have a property of isExploded with a default of false', () => {
    const explosion = new Explosion();

    assert.equal(explosion.isExploded, false);
  });

    it('should have a property of stopBoom with a default of false', () => {
      const explosion = new Explosion();

      assert.equal(explosion.stopBoom, false); 
    });

    it.skip('should have a property of boom', () => {
      const explosion = new Explosion();

    });

    it('should have a prototype explode', () => {
      const explosion = new Explosion(); 

      assert.isFunction(explosion.explode);
    })

    it('should have a prototype boom', () => {
      const explosion = new Explosion();

      assert.isFunction(explosion.boom);
    })

    it('boom should increment radius of an explosion', () => {
      const explosion = new Explosion(); 

      assert.equal(explosion.radius, 20);
      explosion.boom();
      assert.equal(explosion.radius, 21);
    })

    it('boom should decrement the radius of an explosion', () => {
      
    })
    
})