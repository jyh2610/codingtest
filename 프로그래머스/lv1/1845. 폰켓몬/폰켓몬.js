function solution(nums) {
    const leng = nums.length/2
    const size = new Set(nums).size
    return size < leng ? size  : leng
}