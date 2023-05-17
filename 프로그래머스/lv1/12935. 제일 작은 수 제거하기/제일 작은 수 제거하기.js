function solution(arr) {
    const small = Math.min(...arr)
    
const result = arr.filter( item => {
   return item>small
})

   return result.length === 0 ? [-1] : result
}