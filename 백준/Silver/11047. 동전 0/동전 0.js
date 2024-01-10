const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((item) => item.split("\n"));

let total = Number(input[1].splice(0, 1));
const cost = input[1].map((item) => parseInt(item)).sort((a, b) => b - a);
let count = 0;
cost.map((item) => {
  while (true) {
    if (total >= item) {
      total = total - item;
      count++;
    } else {
      return false;
    }
  }
});

console.log(count);
