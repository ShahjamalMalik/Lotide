



const takeUntil = function(array, callback) {
  const results = []
  for (let item of array) {
    if(!callback(item)) {
      results.push(item)
    } else {
      return results
    }
    
    
  }
  return results
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results2 = takeUntil(data1, x => x < 0);
console.log(results2);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data2, x => x === ',');
console.log(results3);