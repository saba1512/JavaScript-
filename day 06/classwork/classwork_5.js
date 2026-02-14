let users = [
  { name: "Zura", active: true },
  { name: "Nino", active: false },
  { name: "Giorgi", active: true },
  { name: "Mari", active: true },
  { name: "Dato", active: false },
  { name: "Natia", active: true },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].active === true) {
    console.log(users[i].name, "ActiveUser");
  } else {
    console.log(users[i].name, "InactiveUser");
  }
}
