let orders = [
  { id: 1, total: 120 },
  { id: 2, total: 80 },
  { id: 3, total: 200 },
  { id: 4, total: 50 }
];

let count = 0;

for (let i = 0; i < orders.length; i++) {
    if (orders[i].total > 100) {
        count ++;
    }
}

console.log(count);