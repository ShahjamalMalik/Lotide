const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for(let key in itemsToCount) {
    if(itemsToCount[key] === true) {
      results[key] = 0
      for(let item of allItems) {
        if (key === item) {
          results[key] += 1
        }
      }
    }
  }



  return results; 
}

// So within a nested loop, the first loops value is being compared to the second loops values completely before moving on to the first loops second value. 



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly([,"b","c","d","e","f","g","h","j", "a", "i"], {"a": true, "b":true, "c":false, "d":true, "e":false, "f":true, "g":false, "h":false, "k":true, "l":true, "i":true, "z": false}))


console.log({1: true, 2:true, 3:false, 4:true, 5:false})