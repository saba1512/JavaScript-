// const numbers = [5, 10, 15, 20];
// const result = numbers.reduce((total) => {
//   return total;
// }, 0);
// console.log(result / numbers.length);

const numbers = [5, 10, 15, 20];

const result = numbers.reduce((total, sum) => {
  return total + sum;
}, 0);

console.log(result);
