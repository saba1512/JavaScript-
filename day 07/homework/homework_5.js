let users = [
  { name: "Gio", logins: [1, 1, 1] },
  { name: "Ana", logins: [1, 1, 1, 1, 1, 1] },
  { name: "Luka", logins: [1, 1, 1, 1] },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].logins.length > 5) {
    console.log(users[i].name);
  }
}
