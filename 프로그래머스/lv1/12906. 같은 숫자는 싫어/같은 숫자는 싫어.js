function solution(arr){
    const stack = []
    
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] !== arr[i+1]){
            stack.push(arr[i])
        }
    }
    return stack
}