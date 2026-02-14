let products = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 2500 },
  { name: "Mouse", price: 80 }
];

let newProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price + 50
  };
});

console.log(newProducts);
