function solution(sizes) {

    const arr = []
    const height = []
    const maxW = sizes.forEach(item=>{
        return item[0] > item[1] ? arr.push(item[0]) : arr.push(item[1])
    })
       const maxH = sizes.forEach(item=>{
        return item[0] - item[1] > 0 ? height.push(item[1]) : height.push(item[0])
    })
    const maxWidth = arr.sort((a,b)=> b-a)[0]
    const maxHeight = height.sort((a,b)=> b-a)[0]
  
    
    return maxWidth * maxHeight
}