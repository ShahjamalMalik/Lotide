const countLetters = function(word) {
  let finalObj = {}
  for (let letter of word) {
    finalObj[letter] = 0
  }

  for (let key in finalObj) {
    for (let letter2 of word) {
      if (key === letter2) {
        finalObj[key] +=1
      }
    }
  }
  return finalObj
}

console.log(countLetters("Yo my name is Shahjamal"))