const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let trees = input[1].map((item) => Number(item)).sort((a, b) => a - b);
let start = 1;
let end = Math.max(...trees);

let target = Number(input[0][1]);
let res = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cut = trees.reduce((acc, tree) => acc + (tree > mid ? tree - mid : 0), 0);

  if (cut >= target) {
    res = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(res);