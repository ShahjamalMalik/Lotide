const eqArrays = require('../eqArrays')



console.log(eqArrays([1, 2, [3,2,1]], [1, 2, [3,2,1]])) // => true
console.log(eqArrays([1, 2, [3,2,1]], [1, 2, [3,2,3]])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false