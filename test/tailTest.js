const assert = require('chai').assert;
const tail = require('../tail')



describe("#tail", () => {
  it("returns [2,3] from [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
    
  });
  it("returns [2,1,4] from [3,2,1,4]", () => {
    assert.deepEqual(tail([3,2,1,4]), [2,1,4])
  })  
});


