// const products = [
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 100 },
//   { name: "Monitor", price: 300 },
// ];
// const totalPrice = products.price.reduce(
//   total,
//   (sum) => {
//     return total + sum;
//   },
//   0,
// );
// console.log(totalPrice / products.price.length);

const products = [
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 },
  { name: "Monitor", price: 300 },
];

const totalPrice = products.reduce((
  total,
  sum) => {
    return total + sum.price;
  },
  0,
);

console.log(totalPrice);
