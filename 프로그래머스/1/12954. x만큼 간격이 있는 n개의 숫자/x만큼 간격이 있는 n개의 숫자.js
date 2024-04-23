function solution(x, n) {
    const res = []
    let curNum = x
    for(let i = 1 ; i<=n;i++){
        const pushNum = i * curNum;
        res.push(pushNum)
    }
    return res
}