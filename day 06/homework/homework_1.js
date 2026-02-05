let students = [
  { name: "Nika", score: 85 },
  { name: "giorgi", score: 72 },
  { name: "ana", score: 90 },
  { name: "Luka", score: 60 },
];

for (let i = 0; i < students.length; i++) {
  students[i].name = students[i].name.toUpperCase();
  console.log(students[i].name, "your score is", students[i].score);
}
