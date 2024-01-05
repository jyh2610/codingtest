const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
.map(item => item.split(' '))

const number = Number(input[0][0])
const findNum = input[1].map(item =>Number(item))


const res = []
findNum.forEach(item =>{
  let count = 0
  for (let i = 1; i <= item; i++) {
    if(item % i === 0){
        count++
    }
   if(item === i && count === 2)
    res.push(item)
  }
})
console.log(res.length);