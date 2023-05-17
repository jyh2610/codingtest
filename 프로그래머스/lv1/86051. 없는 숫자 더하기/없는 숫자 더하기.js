function solution(numbers) {
   const sum = numbers.reduce((cur,prev)=>{
       return cur = cur +prev
   })
   return 45-sum
}