function solution(n) {
    let dividedNum = []
    for(let i = 1 ; i <= n; i++){
        if(n % i === 0) dividedNum.push(i)
    }
    return dividedNum.reduce((prev , cur )=> prev+cur, 0)
}