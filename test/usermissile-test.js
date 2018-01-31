const assert = require('chai').assert;
const Missile = require('../lib/Missile.js');
const UserMissile = require('../lib/userMissile.js');
const Game = require('../lib/Game');

// **Make sure you are testing USERMISSILE not just missile**

describe('User-Missile', () => {

  it('should instantiate our good friend, Missile', () => {
    const missile = new Missile();

    assert.isFunction(Missile);
    assert.isObject(missile);
  });

  it('should take parameters for x, y, w and h', () => {
    const missile = new Missile(10, 10, 10, 10);

    assert.equal(missile.x, 10);
    assert.equal(missile.y, 10);
    assert.equal(missile.width, 10);
    assert.equal(missile.height, 10);
  });

  it('should have both a dx and dy of 0', () => {
    const missile = new Missile();

    assert.equal(missile.dx, 0);
    assert.equal(missile.dy, 0);
  });

  it('should have a both a targetX and targetY of undefined', () => {
    const missile = new Missile();

    assert.equal(missile.targetX, undefined);
    assert.equal(missile.targetY, undefined);
  });

  it('should have a property of hasArrived with a default of false', () => {
    const missile = new Missile();

    assert.equal(missile.hasArrived, false);
  });

  it('should be able to move', () => {
    const missile = new Missile(300, 550, 5, 5);

    missile.dx = 1; 
    missile.dy = 1;

    UserMissile.shoot();

    assert.equal(missile.x, 304);
    assert.equal(missile.y, 554);
    });

    it('should be able to arrive at destination', () => {
    const missile = new Missile(300, 550, 5, 5);

    UserMissile.userTargetY = 551;

    UserMissile.shoot();

    assert.equal(missile.hasArrived, true);
  });

})