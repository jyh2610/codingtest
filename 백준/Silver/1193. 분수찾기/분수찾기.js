const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split(" ");

let n = input[0] * 1;
let i = 1;
let increase = 1;

while (n > i) {
  i += increase + 1;

  increase++;
}
let num = i - n;

for (let j = num; j < num + 1; j++) {
  let total = increase + 1;
  let up = total - (j + 1);
  increase % 2 === 0
    ? console.log(`${up}/${j + 1}`)
    : console.log(`${j + 1}/${up}`);
}
