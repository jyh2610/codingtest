const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

const sortedNumbers = numbers.sort((a, b) => a - b);
sortedNumbers.map((item) => console.log(item));