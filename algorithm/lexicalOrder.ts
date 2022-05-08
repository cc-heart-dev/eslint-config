/**
 * @author heart
 * @description 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
 * @Date 2022-04-18
 * @description: 深度优先遍历  j % 10 === 9 || j + 1 > n 说明末尾的数位已经搜索完成，退回上一位
 *
 */

export function lexicalOrder(n: number): number[] {
  let res: number[] = []
  let j = 1
  for (let i = 0; i < n; i++) {
    res.push(j)
    if (j * 10 <= n) {
      j *= 10
    } else {
      while (j % 10 === 9 || j + 1 > n) j = Number.parseInt(j / 10 + '')
      j++
    }
  }
  return res
}

export function lexicalOrder1(n: number): number[] {
  let res: number[] = []
  // 深度优先搜索
  for (let i = 1; i <= 9; i++) {
    dfs(i, n, res)
  }
  return res
}

/**
 *
 * @param n 上一次的个数
 * @param limit 限制的最大值
 */
function dfs(n: number, limit: number, res: number[]) {
  if (n > limit) return
  res.push(n)
  for (let i = 0; i <= 9; i++) {
    dfs(Number.parseInt(n * 10 + i + ''), limit, res)
  }
}

export {}
