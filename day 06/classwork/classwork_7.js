let students = [
  { name: "Ana", score: 100 },
  { name: "Nika", score: 78 },
  { name: "Giorgi", score: 92 },
  { name: "Dato", score: 42 },
  { name: "Nia", score: 82 },
  { name: "Mariami", score: 95 },
  { name: "Giga", score: 67 },
  { name: "Saba", score: 101 },
];

// 51 < F
// 51 >= and 60 <  E
//                 D
//                 C
//                 B
//                 A


for (let i = 0; i < students.length; i++) {
    if (students[i].score < 51) {
        console.log(students[i].name, "your result is F");
    }
    else if (students[i].score < 61) {
        console.log(students[i].name, "your result is E");
    }
    else if (students[i].score < 71) {
        console.log(students[i].name, "your result is D");
    }
    else if (students[i].score < 81) {
        console.log(students[i].name, "your result is C");
    }
    else if (students[i].score < 91) {
        console.log(students[i].name, "your result is B");
    }
    else if (students[i].score <= 100) {
        console.log(students[i].name, "your result is A");
    }
    else {
        console.log(students[i].name, "your score is out of range");
    }
}