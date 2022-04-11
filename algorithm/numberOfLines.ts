/**
 * @author heart
 * @description
 * @Date 2022-04-12
 * @see: https://leetcode-cn.com/problems/number-of-lines-to-write-string/
 */

function numberOfLines(widths: number[], s: string): number[] {
  let total = 0
  let len = 0
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97
    const width = widths[index]
    total += width
    if (total > 100) {
      total = width
      len++
    }
  }
  if (total > 0) len++
  if (total) return [len, total]
}

export default numberOfLines
