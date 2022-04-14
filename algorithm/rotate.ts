/**
 * @author heart
 * @description 
 * @Date 2022-04-14
 * @see https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let point = nums.length
  point = nums.length - 1 === 1 ? point - (k % point) : (k % (nums.length - 1))
  let i = 0
  let tempNum;
  while (point < nums.length) {
    if (point === nums.length) {
      point = 0
    }
    tempNum = nums[point];
    // 将第一位插入到第i位
    for (let j = point; j >= i + 1; j--) {
      nums[j] = nums[j - 1]; // 后移动
    }
    nums[i] = tempNum;
    i++;
    point++;
  }
};