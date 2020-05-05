const assert = require('chai').assert;
const middle = require('../middle')



describe("#middle", () => {
  it("returns [2] from [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    
  });
  it("returns [2,1] from [3,2,1,4]", () => {
    assert.deepEqual(middle([3,2,1,4]), [2,1])
  })  
});