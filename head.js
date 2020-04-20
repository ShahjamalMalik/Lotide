const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arrays) {
  return arrays[0]
}
assertEqual(head([]), 0)
assertEqual(head([2,4,6]), 0)
assertEqual(head([3,6,9]), 0)
assertEqual(head([2,1,6]), 0)
assertEqual(head(["hello","ok","bye"]), "hello")
assertEqual(head(["no",1,2]), "no")
