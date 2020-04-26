const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (let keys in obj) {
    if(obj[keys] === value) {
      b = keys
      return b
    }
  }
}


let bestTvShowsByGenre = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}

console.log(findKeyByValue(bestTvShowsByGenre, "Brooklyn Nine-Nine"))

assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);