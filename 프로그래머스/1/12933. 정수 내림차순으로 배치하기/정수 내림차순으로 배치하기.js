function solution(n) {
   const toArr = String(n).split('').map(item=> Number(item))
   const sortedArr = toArr.sort((a,b)=> b-a)
   return Number(sortedArr.join(''))
}