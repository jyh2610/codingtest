function solution(n) {
    let str = '수박'
    let res = ''
    const repeatNum = parseInt(n/2)
    for(let i=0 ; i<repeatNum; i++){
        res= res + str
    }
    
    return n%2 === 0 ? res : res+'수'
    
}