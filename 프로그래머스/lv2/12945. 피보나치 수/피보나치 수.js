function solution(n) {
  const answer = [ 0 , 1]
  for(let i = 2 ; i<=n ;i++){
      const number=(answer[i-1]+ answer[i-2])%1234567
      answer.push(number)
  }
  return answer[n] % 1234567
}