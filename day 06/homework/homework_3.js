let cart = [
  { name: "Phone", price: 1200, quantity: 1 },
  { name: "Case", price: 50, quantity: 2 },
  { name: "Charger", price: 80, quantity: 5 },
];

for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].name, "total price is", cart[i].price * cart[i].quantity);
}