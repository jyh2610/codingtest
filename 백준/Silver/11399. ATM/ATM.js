const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);
const times = input[1]
  .split(" ")
  .map((item) => parseInt(item))
  .sort((a, b) => a - b);

let total = 0;

for (let i = 0; i < N; i++) {
  total += times[i] * (N - i);
}

console.log(total);
