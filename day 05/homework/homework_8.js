// დაბეჭდე მხოლოდ იმ პროდუქტების სახელები, რომელთა ფასი 1000-ზე მეტია.

let products = [
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Tablet", price: 900 }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 1000) {
        console.log(products[i].name);
    }
}