function solution(name, yearning, photo) {
    const result = []
    const obj={}
    name.forEach((item , i)=>{
        obj[item] = yearning[i]
    })

photo.map(item=>{
    let sum = 0
    item.map(data=>{
      Object.keys(obj).includes(data) ? sum = sum + obj[data] : 0
    })   
    result.push(sum)
    sum= 0
 
 })

   return result
}