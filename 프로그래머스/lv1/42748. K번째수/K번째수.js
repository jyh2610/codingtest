function solution(array, commands) {
   const a = commands[0]
   const b = commands[1]
   const c = commands[2]
   const result = []
   commands.map(item =>{
       const where = item[0] -1
       const how = item[1] <item[0]  ? 1 : item[1] - item[0] +1
       
     const test =array.filter((data, i )=>{
         if(item[0]-1<=i && i<= item[1]-1){
             return data
         } 
     }).sort((a,b)=>a-b)
         result.push(test[item[2]-1])
   })
   return result
}