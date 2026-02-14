// შექმენი ფუნქცია, რომელიც დააბრუნებს ახალი მასივს, სადაც ყველა რიცხვი გამრავლებულია 3-ზე.

let numbers = [2, 4, 6, 8, 10];

function multiplyByThree(num) {
  return num * 3;
}

let multipliedNumbers = numbers.map(multiplyByThree);

console.log(multipliedNumbers);