const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const limit = Number(input);

let res = 1;
for (let i = 1; i <= limit; i++) {
  res = res * i;
}

console.log(res);
