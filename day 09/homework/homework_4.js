let products = [
  { name: "Phone", price: 1000 },
  { name: "Headphones", price: 150 },
  { name: "Laptop", price: 2500 },
  { name: "Mouse", price: 80 }
];

let expensiveProducts = products.filter(product => product.price > 500);

console.log(expensiveProducts);