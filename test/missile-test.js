const assert = require('chai').assert;

const Missile = require('../lib/Missile.js');

const UserMissile = require('../lib/userMissile.js');
const Game = require('../lib/Game')

describe("userMissile", () => {
  it("should instantiate userMissile", () => {
    const userMissile = new UserMissile();

    assert.isFunction(userMissile);
    assert.isObject(userMissile);
  })

  it("should take in params from x and y", () => {
    const userMissile = new UserMissile(410, 600, 15, 15);

    assert.isFunction(userMissile);
    assert.isObject(userMissile);
  })
})