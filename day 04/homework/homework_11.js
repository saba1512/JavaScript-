let numbers = [3, 6, 9, 12, 15, 18, 21];

let even_result = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even_result += numbers[i]
    }
}

console.log(even_result);