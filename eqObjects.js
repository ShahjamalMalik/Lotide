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




const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1)
  let object1Values = Object.values(object1)
  let object1FinalArray = object1Keys.concat(object1Values)
  let object2Keys = Object.keys(object2)
  let object2Values = Object.values(object2)
  let object2FinalArray = object2Keys.concat(object2Values)
  object1FinalArray = object1FinalArray.sort()
  object2FinalArray = object2FinalArray.sort()
  if (eqArrays(object1FinalArray, object2FinalArray)) {
    return true
  }
  else {
    return false
  }
}


console.log(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }))