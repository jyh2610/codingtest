function solution(s){
   const toUpperCase = s.toUpperCase()
   const toArr = toUpperCase.split('')
    let res = 0
   toArr.map(char => {
       if(char === 'P') res = res + 1
       if(char === 'Y') res = res - 1
   })
    
    return res === 0 ? true : false
}

