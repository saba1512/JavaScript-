// შექმენი ფუნქცია, რომელიც იპოვის მომხმარებელს id = 2.

let users = [
  { id: 1, name: "Nika" },
  { id: 2, name: "Ana" },
  { id: 3, name: "Gio" }
];

function findUserById(user) {
  return user.id === 2;
}

let user = users.find(findUserById);

console.log(user);