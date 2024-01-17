const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
  
const goal = Number(input[0][1]);
const cards = input[1].map((item) => Number(item)).sort((a, b) => b - a);
let maxSum = 0;

for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const currentSum = cards[i] + cards[j] + cards[k];
      if (currentSum <= goal) {
        maxSum = Math.max(maxSum, currentSum);
      }
    }
  }
}

console.log(maxSum);