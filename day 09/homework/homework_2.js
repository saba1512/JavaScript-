let users = [
  { id: 1, name: "Nika", age: 20 },
  { id: 2, name: "Ana", age: 22 },
  { id: 3, name: "Gio", age: 19 }
];

let names = users.map(user => user.name);

console.log(names);