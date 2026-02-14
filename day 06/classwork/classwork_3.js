let products = [
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 5500 },
  { name: "Tablet", price: 3200 }
];

let maxPrice = products[0]

for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxPrice.price) {
        maxPrice = products[i] 
    }
}

console.log(maxPrice.name);