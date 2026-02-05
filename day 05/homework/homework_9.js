// დაითვალე რამდენი მომხმარებელია 18 წლის ან მეტი.

let users = [
  { name: "Saba", age: 17 },
  { name: "Nino", age: 22 },
  { name: "Gio", age: 15 }
];

let count = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        count ++;
    }
}

console.log(count);