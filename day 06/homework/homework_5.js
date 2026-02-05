const students = [
  { name: "Nika", scores: [80, 90, 70] },
  { name: "Giorgi", scores: [95, 88, 92] },
  { name: "Ana", scores: [60, 75, 70] },
  { name: "Luka", scores: [100, 98, 95] },
];

for (let i = 0; i < students.length; i++) {
  let avg = 0;

  for (let o = 0; o < students[i].scores.length; o++) {
    avg += students[i].scores[o];
  }

  console.log(
    students[i].name,
    "your avarage score is",
    avg / students[i].scores.length,
  );
}
