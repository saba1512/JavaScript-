let students = [
  { name: "Elene", score: 45 },
  { name: "David", score: 82 },
  { name: "Tamar", score: 50 },
  { name: "Levan", score: 35 },
  { name: "Sandro", score: 77 },
  { name: "Natia", score: 40 },
  { name: "Giorgi", score: 90 },
  { name: "Mariam", score: 30 },
  { name: "Ana", score: 68 },
  { name: "Luka", score: 49 },
];

let failed = [];
let passed = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].score < 51) {
    failed.push(students[i].name);
  } else {
    passed.push(students[i].name);
  }
}


console.log(failed.join(", ") + " — you did not pass.");
console.log(passed.join(", ") + " — congratulations, you passed the exam!");