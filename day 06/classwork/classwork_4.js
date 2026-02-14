let students = [
  { name: "Nika", score: 80 },
  { name: "Giorgi", score: 90 },
  { name: "Ana", score: 92 },
  { name: "jaba", score: 97},
];

let highestScore = students[0]

for (let i = 0; i < students.length; i++) {
    if (students[i].score > highestScore.score) {
        highestScore = students[i]
    }
}
console.log(highestScore.name);