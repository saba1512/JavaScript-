// შექმენი ფუნქცია, რომელიც რანდომულად დააბრუნებს ერთ საჩუქარს.

let gifts = ["Phone", "Book", "Headphones", "Watch"];

function getRandomGift() {
  let randomIndex = Math.floor(Math.random() * gifts.length);
  return gifts[randomIndex];
}

let randomGift = getRandomGift();

console.log("Your Gift is: " + randomGift);