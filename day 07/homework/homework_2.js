let courses = [
  { name: "JavaScript", students: ["Nika", "Ana", "Luka", "Dato"] },
  { name: "Python", students: ["Gio", "Mariam"] },
  { name: "React", students: ["Saba", "Nini", "Lasha", "Nika", "Ana"] },
];

for (let i = 0; i < courses.length; i++) {
  if (courses[i].students.length > 3) {
    console.log(courses[i].name);
  }
}
