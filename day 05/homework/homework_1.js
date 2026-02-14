let text = "frontend developer";

let eCount = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i].includes("e")) {
    eCount++;
    console.log(text[i]);
  }
}
console.log("Total 'e' count:", eCount);