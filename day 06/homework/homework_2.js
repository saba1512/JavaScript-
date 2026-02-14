let employees = [
  { name: "Nika", salary: 2500 },
  { name: "Giorgi", salary: 1800 },
  { name: "Ana", salary: 3000 },
  { name: "Luka", salary: 1500 },
];

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 2000) {
        console.log(employees[i].name);
    }   
}