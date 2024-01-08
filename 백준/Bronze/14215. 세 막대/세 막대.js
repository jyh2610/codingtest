const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item))
  .sort((a, b) => a - b);

const a = input[0];
const b = input[1];
const c = input[2];

if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log(2 * (a + b) - 1);
}
