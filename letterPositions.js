

const letterPositions = function(sentence) {
  let finalObj = {}
  for (let letter of sentence) {
    finalObj[letter] = []
  }
  for (let key in finalObj) {
    for (let letter2 in sentence) {
      if(sentence[letter2] === key) {
        finalObj[key].push(letter2)
      }
      
    }
  }
  return finalObj
}

console.log(letterPositions("hello my name is shahjamal"))
 

// Create object with letters 
//Iterate sentence to create the object with keys being letters and value being empty arrays. 
//Iterate keys of object 
//Iterate through letters of sentence
//If keys === letters of sentence then push the index value of that letter into the array

