/**
 * @author heart
 * @description
 * @Date 2022-04-19
 */

function shortestToChar(s: string, c: string): number[] {
  const ans: number[] = []
  const arr: number[] = []
  for (let i = 0; i <= s.length; i++) {
    if (s.charAt(i) === c) {
      arr.push(i)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === c) {
      ans.push(0)
    } else {
      // 判断i 离哪一个数字近
      // 需要判断的是i 在 arr的哪个位置
      for (let j = 0; j < arr.length; j++) {
        if (i < arr[j] && j == 0) {
          ans.push(Math.abs(arr[j] - i))
          break
        } else if (i < arr[j] && j > 0) {
          ans.push(Math.min(Math.abs(arr[j] - i), Math.abs(arr[j - 1] - i)))
          break
        } else if (i > arr[j] && j == arr.length - 1) {
          ans.push(Math.abs(arr[j] - i))
          break
        }
      }
    }
  }
  return ans
}
