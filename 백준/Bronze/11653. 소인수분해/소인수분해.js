const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim();
const N = parseInt(input);

const isPrime = (n) => {
  const res = [];

  if (n === 1) return res;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      res.push(i);
      n /= i;
    }
  }

  if (n > 1) {
    res.push(n);
  }

  return res;
};

if (N !== 1) {
  const result = isPrime(N);

  result.forEach((factor) => {
    console.log(factor);
  });
}
