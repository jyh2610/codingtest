const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

const a = [Number(input[0][0]), Number(input[0][1])];
const b = [Number(input[1][0]), Number(input[1][1])];
const c = [Number(input[2][0]), Number(input[2][1])];

let res = [];
if (a[0] === b[0]) {
  res.push(c[0]);
} else if (a[0] === c[0]) {
  res.push(b[0]);
} else {
  res.push(a[0]);
}

if (a[1] === b[1]) {
  res.push(c[1]);
} else if (a[1] === c[1]) {
  res.push(b[1]);
} else {
  res.push(a[1]);
}

console.log(res.join(" "));
