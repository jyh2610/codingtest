function solution(absolutes, signs) {
    const toInt = absolutes.map((item,i)=>{
      return  signs[i] ? item : item * -1
    })
    const result = toInt.reduce((prev,cur)=>{
        return prev+cur
    })
    return result
}