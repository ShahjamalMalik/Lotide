




const findKey = function(obj, callback) {
  let results = []
  for (keys in obj) {
    
    
    if(callback(obj[keys]) ) {
      results.push(keys)
    }
    
  }
  console.log(results[0])
}





findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"



findKey({
  "Shahjamal": "Malik",
  "Shah": "Malik",
  "Momna": "Ara",
  "Samar": "Ara",
  "Abid": "Mahmood"
}, x => x === "Ara")