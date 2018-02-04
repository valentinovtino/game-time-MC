const assert = require('chai').assert;
const Missile = require('../lib/Missile.js');
const UserMissile = require('../lib/userMissile.js');
const Game = require('../lib/Game')

describe("Missile", () => {

  it("should instantiate userMissile", () => {
    const missile = new Missile();

    assert.isObject(missile);
  })

  it("should take in params from x and y", () => {
    const missile = new Missile(410, 600, 15, 15);

    assert.isObject(missile);
  })

  it('should take parameters for width and height', () => {
    const missile = new Missile(410, 600, 15, 15);

    assert.equal(missile.width, 15)
    assert.equal(missile.height, 15)
  })

  it('should have a dx and dy of zero', () => {
    const missile = new Missile();

    assert.equal(missile.dx, 0)
    assert.equal(missile.dy, 0)
  })

  it('should have a property of hasArrived with a default of false', () => {
    const missile = new Missile();

    assert.equal(missile.hasArrived, false)
  })

  it('should have a property of hasCollided with a default of false', () => {
    const missile = new Missile();
    
    assert.equal(missile.hasCollided, false)
  })

})