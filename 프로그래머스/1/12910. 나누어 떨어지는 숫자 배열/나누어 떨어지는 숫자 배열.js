function solution(arr, divisor) {
    const res = []
    arr.map(item=>{
        if(item % divisor === 0) res.push(item)
    })
    
    return res.length === 0 ? [-1] : res.sort((a,b)=> a-b)
}