let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


const arr = input.map((item) => item.split(" ").map((str) => Number(str)));
const max = arr.map((item) => Math.max(...item));
const maxNum = Math.max(...max);
let row = [];
const line = [];
max.map((item, idx) => {
  maxNum === item && row.push(idx);
});

arr[row[0]].map((item, idx) => maxNum === item && line.push(idx));
console.log(`${maxNum}
${row[0] + 1} ${line[0] + 1}`);
