let cart = [
  { name: "Shoes", price: 150 },
  { name: "Jacket", price: 300 },
  { name: "Hat", price: 50 },
];

let totalPrice = 0;

for (let i =0; i < cart.length; i++) {
    totalPrice += cart[i].price;
}

console.log(totalPrice);