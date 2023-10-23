function solution(t, p) {
  const arr = t.split('');
    let result = 0
    const pLength = p.length
    for(let i = 0 ; i < t.length ; i++){
  const isBig = arr.slice(i , pLength + i)
  if(isBig.length < pLength){
        break
    }    
    Number(isBig.join('')) <= p && result++  
    }
    return result
}