function solution(left, right) {
  const number = right-left
  const arr =[]
  let count = 0
  let sum = 0;
  for(let i = 0; i<=number; i++){
      arr.push(left+i)
      for(let k=1 ; k<=arr[i]; k++){
       if(arr[i]%k === 0){
           count++
       }    
       if(k === arr[i]){
           count % 2 === 0 ? (sum += arr[i]) : (sum -= arr[i]);
            count = 0
          }
        
      }
  }
  return sum
}


// function solution(left, right) {
//   const number = right - left;
//   const arr = [];
//   let count = 0;
//   let sum = 0;

//   for (let i = 0; i <= number; i++) {
//     arr.push(left + i);
//     for (let k = 1; k <= arr[i]; k++) {
//       if (arr[i] % k === 0) {
//         count++;
//       }

//       if (k === arr[i]) {
//         count % 2 === 0 ? (sum += arr[i]) : (sum -= arr[i]);
//         count = 0; // 초기화 위치 수정
//       }
//     }
//     console.log(count);
//   }

//   return sum;
// }
