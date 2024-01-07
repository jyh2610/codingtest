const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim();

const num = Number(input);
const res = (n) => 3 * n + n;

console.log(res(num));
