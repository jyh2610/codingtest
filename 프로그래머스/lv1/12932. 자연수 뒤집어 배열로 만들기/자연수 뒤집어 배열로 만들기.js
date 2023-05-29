function solution(n) {
    const arr = n.toString().split('')
    const result = []
    arr.map(item => result.unshift(Number(item)))
    return result
}