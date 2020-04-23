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

const middle = function(arr) {
  newArray = []
  if (arr.length === 1 || arr.length === 2) {
    return newArray
  } 
  else if (arr.length % 2 !== 0) {
    middleElement = Math.floor(arr.length / 2)
    newArray.push(arr[middleElement])
    return newArray
  } 
  else {
    firstElement = arr.length / 2
    secondElement = firstElement + 1
    newArray.push(firstElement, secondElement)
    return newArray
  }
}

let a = [1,2,3,4,5,6,7,8,9,10]
let b = [1,2,3,4,5,6,7,8,9,10,11]
let c = [1,2,3,4,5,6,7,8,9,10,11,12]
let d = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let e = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let f = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let g = [1]
let h = [1,2]
assertArraysEqual(middle(a), [5,6])
assertArraysEqual(middle(b), [6])
assertArraysEqual(middle(c), [6,7])
assertArraysEqual(middle(d), [7])
assertArraysEqual(middle(e), [7,8])
assertArraysEqual(middle(f), [8])
assertArraysEqual(middle(g), [])
assertArraysEqual(middle(h), [])