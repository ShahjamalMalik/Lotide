
const middle = function(arr) {
  newArray = []
  if (arr.length === 1 || arr.length === 2) {
    return newArray
  } 
  else if (arr.length % 2 !== 0) {
    middleElement = Math.floor(arr.length / 2)
    newArray.push(arr[middleElement])
    return newArray
  } 
  else {
    let secondElement = (arr.length / 2) - 1
    let firstElement = arr.length / 2
    newArray.push(firstElement, secondElement)
    return newArray
  }
}

console.log(middle([3,2,1,4]))
module.exports = middle;

