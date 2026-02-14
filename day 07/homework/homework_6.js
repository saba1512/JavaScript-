let students = [
  { name: "Nika", scores: [85, 90, 88] },
  { name: "Ana", scores: [95, 92, 91] },
  { name: "Luka", scores: [80, 58, 85] },
  { name: "Gio", scores: [78, 82, 79] }
];

for (let i = 0; i < students.length; i++) {
  let sum = 0;
  let hasLowScore = false;

  for (let j = 0; j < students[i].scores.length; j++) {
    sum += students[i].scores[j];

    if (students[i].scores[j] < 60) {
      hasLowScore = true;
    }
  }

  let average = sum / students[i].scores.length;

  if (average > 80 && hasLowScore === false) {
    console.log(students[i].name);
  }
}