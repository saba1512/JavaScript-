let customers = [
  { name: "Nika", orders: [120, 80, 45] },
  { name: "Ana", orders: [300, 150, 90] },
  { name: "Luka", orders: [60, 75, 110] },
  { name: "Gio", orders: [200, 50, 40] },
];

if (customers.length > 0) {
  let topCustomer = customers[0];

  let maxSum = 0;

  for (let j = 0; j < customers[0].orders.length; j++) {
    maxSum += customers[0].orders[j];
  }

  for (let i = 0; i < customers.length; i++) {
    let sum = 0;

    for (let j = 0; j < customers[i].orders.length; j++) {
      sum += customers[i].orders[j];
    }

    if (sum > maxSum) {
      maxSum = sum;
      topCustomer = customers[i];
    }
  }

  console.log(topCustomer.name);
  console.log(maxSum);
} else {
  console.log("list is empty");
}
