const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
.map(item => Number(item))


const res = []
for (let i = input[0]; i <= input[1]; i++) {
    let count = 0
    for (let j = 0; j <= i; j++) {
      if(i % j === 0){
        count++
    }
   if(i === j && count === 2)
    res.push(j)
    }
 
  }

const total = res.reduce((total, item) => total + item, 0)
const mini = Math.min(...res)
const answer = res.length === 0 ? -1 : `${total}
${mini}`
console.log(answer);