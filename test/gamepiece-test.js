const assert = require('chai').assert;
const GamePiece = require('../lib/GamePiece');


describe('GamePiece', function() {
  
  let gamePiece;

  beforeEach(() => {
    gamePiece = new GamePiece(10,10,10,10)
  })

  it('should be a function', function() {
    assert.isFunction(GamePiece);
  })

  it('should have a x-position', function() {
    assert.equal(gamePiece.x, 10)
  })

  it('should have a y-position', function() {
    assert.equal(gamePiece.y, 10)
  })

  it('should have a width', function() {
    assert.equal(gamePiece.width, 10)
  })

  it('should have a height', function() {
    assert.equal(gamePiece.height, 10)
  })



})