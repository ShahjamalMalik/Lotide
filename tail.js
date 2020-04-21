const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const tail = function(arr) {
  return arr.slice(1, arr.length)
}



const assertEqual2 = function(actual, expected) {
	if (actual.length !== expected.length) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } 
  if(typeof actual === "number" || typeof actual === "string") {
    if(actual === expected) {
      return console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  }
	if(typeof actual === "object") {
    for(let i = 0; i > actual.length; i++) {
      if(actual[i] !== expected[i]) {
        return console.log(`Assertion Failed: ${actual} !== ${expected}`) 
      } //else {
        //return console.log(`Assertion Passed: ${actual} === ${expected}`);
      //}
    } return console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
}

const words = []

console.log(tail(words))

assertEqual(words.length, 3)
