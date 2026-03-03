const employees = [
  { id: 1, name: "Giorgi", salary: 3000, department: "IT", years: 5 },
  { id: 2, name: "Nino", salary: 1500, department: "HR", years: 2 },
  { id: 3, name: "Luka", salary: 4000, department: "IT", years: 7 },
  { id: 4, name: "Ana", salary: 2000, department: "Finance", years: 3 },
  { id: 5, name: "Saba", salary: 3500, department: "IT", years: 4 },
];

let findIt = employees.filter((i) => i.department === "IT");

// console.log(findIt);

// let trustedPerson = employees.filter(i => i.years > 3)

// console.log(trustedPerson);

// let names = employees.map(i => i.name.toUpperCase())

// console.log(names);

// let findId = employees.find(i => i.id === 4)

// console.log(findId);

// const totalSalary = employees.reduce((total, Allowance) => {
//     return total + Allowance.salary;
// }, 0);

// console.log(totalSalary);

const totalSalaryIt = findIt.reduce((total, Allowance) => {
  return total + Allowance.salary;
}, 0);

console.log(totalSalaryIt);
