// 1️⃣ დატოვებს მხოლოდ 60-ზე მეტ ქულებს
// 2️⃣ შემდეგ ყველას დაამატებს +5 ქულას

let scores = [45, 80, 90, 30, 70, 100];

function filterHighScores(score) {
    return score > 60;
}

let highScores = scores.filter(filterHighScores);

function addBonus(score) {
    return score + 5;
}

let finalScores = highScores.map(addBonus);

console.log(finalScores);