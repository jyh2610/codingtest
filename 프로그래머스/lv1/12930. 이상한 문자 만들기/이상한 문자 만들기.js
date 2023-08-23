function solution(s) {
    const toArr = s.split(' ')
    const arr = toArr.map(item =>{
        const data = item.split('')
       return  data.map((item,i)=>{
            if(i === 0 || i%2 === 0){
               return item.toUpperCase()
            }else{
               return item.toLowerCase()
            }
        })
 
    })
   
const result = arr.map(item => item.join("")).join(" ");

return result
}