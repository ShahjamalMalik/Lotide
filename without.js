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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }
}


const without = function(source, itemsToRemove) {
  let finalArray = source
  return finalArray.filter(item => !itemsToRemove.includes(item))
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(without(words, "lighthouse"), ["hello", "world"])