function solution(absolutes, signs) {
  const formattedArr = absolutes.map((item,index)=>{
       return signs[index] ? item : -1 * item
   })
  return  formattedArr.reduce((prev,cur)=> prev + cur , 0)
  
}