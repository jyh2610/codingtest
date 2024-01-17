const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim();

let num = Number(input);

const findConstructor = (num) => {
  for (let i = 1; i <= num; i++) {
    let sum = i;
    let currentNum = i;

    while (currentNum > 0) {
      sum += currentNum % 10;
      currentNum = Math.floor(currentNum / 10);
    }

    if (sum === num) {
      return i;
    }
  }

  return 0;
};

console.log(findConstructor(num));