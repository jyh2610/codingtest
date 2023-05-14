function solution(n)
{
    const str= n.toString()
    let result = 0
    for(let i = 0 ; i<str.length ; i++){
        const num = Number(str[i])
        result = result + num
    }
return result

}