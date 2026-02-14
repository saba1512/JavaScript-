// შექმენი ფუნქცია, რომელიც დატოვებს მხოლოდ 18-ზე მეტ რიცხვებს.

let ages = [12, 18, 25, 14, 30, 16];

function filterAdults(age) {
  return age > 18;
}

let adults = ages.filter(filterAdults);

console.log(adults);