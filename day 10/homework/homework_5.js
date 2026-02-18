// ✅ 1️⃣ map დავალებები

// 1.შექმენი ახალი მასივი, სადაც იქნება მხოლოდ სახელები

// 2.შექმენი მასივი, სადაც ყველას ქულას დაუმატებ +5

// 3.შექმენი მასივი ასეთი ტექსტით:
// 👉 "Nika is 17 years old"


// ✅ 2️⃣ filter დავალებები

// 4.გაფილტრე მხოლოდ ისინი, ვინც 18 წლის ან მეტი არიან

// 5.დატოვე მხოლოდ ისინი, ვისაც ქულა ≥ 80 აქვს

// 6.გაფილტრე არასრულწლოვნები (18-ზე ნაკლები)

// ✅ 3️⃣ find დავალებები

// 7.იპოვე პირველი user, ვისაც ქულა < 70 აქვს

// 8.იპოვე user სახელით "Mariam"

// 9.იპოვე პირველი 20+ წლის ადამიანი




const users = [
    { name: "Nika", age: 17, score: 80 },
    { name: "Ana", age: 22, score: 95 },
    { name: "Luka", age: 19, score: 60 },
    { name: "Mariam", age: 25, score: 88 },
    { name: "Gio", age: 16, score: 70 },
];

// 1 homework ✅ DONE

// let onlyNames = users.map(names => {
//     return{
//         name: names.name
//     }
// });

// console.log(onlyNames);

// 2 homework ✅ DONE

// let addBonus = users.map(bonus => {
//     return bonus.score + 5
// });

// console.log(addBonus);

// 3 homework ✅ DONE

// let namePlusAge = users.map(nameAge => {
//     return nameAge.name + " is " + nameAge.age + " years old "
// });

// console.log(namePlusAge);

// 4 homework ✅ DONE

// let adult = users.filter(ageRistrict => ageRistrict.age >= 18);

// console.log(adult);

// 5 homework ✅ DONE

// let pass = users.filter(scorePass => scorePass.score >= 80)

// console.log(pass);

// 6 homework ✅ DONE

// let child = users.filter(child => child.age < 18);

// console.log(child);

// 7 homework ✅ DONE

// let lowScore = users.find(low => low.score < 70);

// console.log(lowScore);

// 8 homework ✅ DONE

// let findMariam = users.find(mariam => mariam.name === "Mariam");

// console.log(findMariam);

// 9 homework ✅ DONE

// let findAdult = users.find(adult => adult.age > 20);

// console.log(findAdult);