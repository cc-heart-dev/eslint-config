/**
 * @author heart
 * @description
 * @Date 2022-04-11
 * @see: https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * @description: 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n
 */

function countNumbersWithUniqueDigits(n: number): number {
  let ans = 0
  for (let i = 1; i <= n; i++) {
    let j = 10 // 表示阶层
    let num = i
    let total = 1
    let isFirstCount = true
    while (num-- > 0) {
      if(isFirstCount) {
        // 第一位数 1-9
        total *= 9
        isFirstCount = false 
      }else {
        total *= j
      }
      j--
    }
    ans += total
  }
  return ++ans
}

export default countNumbersWithUniqueDigits
