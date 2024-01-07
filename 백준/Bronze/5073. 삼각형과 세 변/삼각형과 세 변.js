const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((data) => Number(data)));
input.pop();

const isTri = (input) => {
  const max = Math.max(...input);
  const sum = input.reduce((acc, item) => acc + item, 0) - max;

  if (max >= sum) {
    console.log("Invalid");
    return;
  }

  if (input[0] === input[1] && input[1] === input[2]) {
    console.log("Equilateral");
  } else if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2]) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
};

input.map((item) => isTri(item));
