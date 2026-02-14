let products = [
  { id: 1, name: "Mouse", price: 80 },
  { id: 2, name: "Keyboard", price: 120 },
  { id: 3, name: "Phone", price: 999 },
  { id: 4, name: "Laptop", price: 2500 }
];

let randomIndex = Math.floor(Math.random() * products.length);

let randomProduct = products[randomIndex];

console.log("Your Gift is:");
console.log(randomProduct.id + " - " + randomProduct.name);