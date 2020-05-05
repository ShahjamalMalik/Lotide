const assert = require('chai').assert;
const head = require('../head');




describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
    
  });
  it("returns 3 from [3,2,1]", () => {
    assert.strictEqual(head([3,2,1]), 3)
  })  
});