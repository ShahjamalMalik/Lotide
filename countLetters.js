let a = "heLLo"
let finalObj = {}
for (let letter of a) {
  finalObj[letter] = 0
}

for (let key in finalObj) {
  console.log(key)
  for(let letter2 of a) {
    if(key === letter2) {
      finalObj[key] += 1
    }
  }
}

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