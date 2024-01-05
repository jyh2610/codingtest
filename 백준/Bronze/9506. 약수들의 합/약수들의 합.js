const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

for (let i = 0; i < input.length - 1; i++) {
  const n = input[i];

  if (isPerfectNumber(n)) {
    const divisors = findDivisors(n);
    console.log(`${n} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}

function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

function findDivisors(num) {
  const divisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}
