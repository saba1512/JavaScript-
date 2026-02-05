let students = [
  { name: "Nika", score: 80 },
  { name: "Giorgi", score: 90 },
  { name: "Ana", score: 100 }
];

let totalScore = 0;

for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score
}

console.log(totalScore / students.length);