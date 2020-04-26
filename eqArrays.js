const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const eqArrays = function(actual, expected) {
  if (Array.isArray(expected) === true && Array.isArray(actual) === true) {
    if (actual.length !== expected.length) {
      return false;
    } 
    for(let i = 0; i < actual.length; i++) {
      const check = eqArrays(actual[i], expected[i]);
      if(check === false) {
        return false
      }
    } return true
    //return false
  } else {
    return actual === expected
  }
}

console.log(eqArrays([1, 2, [3,2,1]], [1, 2, [3,2,1]])) // => true
console.log(eqArrays([1, 2, [3,2,1]], [1, 2, [3,2,3]])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false