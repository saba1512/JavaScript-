let users = [
  { id: 1, name: "Nika" },
  { id: 2, name: "Ana" },
  { id: 3, name: "Gio" },
  { id: 4, name: "Luka" }
];

let user = users.find(i => i.id === 3);

console.log(user);