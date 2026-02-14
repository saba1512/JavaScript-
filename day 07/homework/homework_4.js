let orders = [
  { id: 1, prices: [50, 60, 70] },
  { id: 2, prices: [150, 200] },
  { id: 3, prices: [100, 90, 80] },
];


for (let i = 0; i < orders.length; i++) {
  let sum = 0;

  for (let j = 0; j < orders[i].prices.length; j++) {
    sum += orders[i].prices[j];
  }

  if (sum > 300) {
    console.log("Order ID:", orders[i].id);
  }
}