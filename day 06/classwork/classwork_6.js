let cart = [
  { name: "Phone", price: 1000, quantity: 2 },
  { name: "Headphones", price: 200, quantity: 1 },
  { name: "Charger", price: 50, quantity: 3 }
];

for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].name, "total price is", cart[i].price * cart[i].quantity);
}