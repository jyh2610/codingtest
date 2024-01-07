const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim();

const num = Number(input);
const res = (n) => 3 * (n - 1) + n + 3;

console.log(res(num));
