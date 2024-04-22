function solution(n)
{
   const toString = n + ''
return toString.split('').reduce((prev, curr)=>Number(prev)+Number(curr),0)
}