const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split(" ")
  .map((item) => Number(item));
const distance = input[2];
let up = input[0];
let down = input[1];
const day = up - down;
let count = 0;

count = (distance - down) / day;

console.log(Math.ceil(count));
