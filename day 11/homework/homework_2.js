const users = [
  { id: 1, name: "Giorgi", age: 25, isActive: true },
  { id: 2, name: "Nino", age: 17, isActive: false },
  { id: 3, name: "Luka", age: 30, isActive: true },
  { id: 4, name: "Ana", age: 15, isActive: true },
  { id: 5, name: "Saba", age: 40, isActive: false },
];

const ageTotal = users.reduce((total, idk) => {
  return total + idk.age;
}, 0);

console.log(ageTotal);
