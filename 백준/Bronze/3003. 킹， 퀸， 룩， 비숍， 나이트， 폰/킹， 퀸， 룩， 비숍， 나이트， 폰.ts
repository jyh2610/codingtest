let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
const toNum = input.map((item) => Number(item));

const rightNum = [1, 1, 2, 2, 2, 8];
const res = rightNum.map((item, index) => item - toNum[index]);

console.log(res.join(" "));
