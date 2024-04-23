function solution(s) {
   const toArr = s.split(' ').map(item => Number(item))
   console.log(toArr)
   const max = Math.max(...toArr)
   const min = Math.min(...toArr)
   return `${min} ${max}`
}