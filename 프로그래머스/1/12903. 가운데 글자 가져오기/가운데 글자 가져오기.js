function solution(s) {
    const isLengthEven = s.length % 2 === 0
    const center = Math.floor(s.length /2)
    if(isLengthEven){
        return s[center-1]+s[center]
    }
    return s[center]
    
}