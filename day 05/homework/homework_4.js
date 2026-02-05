let students = [
  { name: "Nika", score: 85 },
  { name: "Giorgi", score: 72 },
  { name: "Ana", score: 90 },
  { name: "Luka", score: 60 }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score > 80) {
    console.log(students[i].name);
  }
}