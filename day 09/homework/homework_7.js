let fruit = ["apple", "banana", "kiwi", "mango", "pear"];

function getFruitsLength(arr) {
  return arr.map(word => word.length);
}

let fruitsLength = getFruitsLength(fruit);

console.log(fruitsLength);