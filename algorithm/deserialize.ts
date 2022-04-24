/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author heart
 * @description 迷你词法分析器
 * @Date 2022-04-15
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedInteger {
  constructor(private value?: number) {}
}

function deserialize(s: string): NestedInteger {
  let ans
  let header = ans
  const arr = [] // 栈结构
  if (s.charAt(0) !== '[') {
    ans = new NestedInteger(Number.parseFloat(s))
    arr.push(ans)
    return ans
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (!ans) {
      ans = new NestedInteger()
      header = ans
      arr.push(ans)
    } else if (s.charAt(i) == '[') {
      const temp = new NestedInteger()
      ans.add(temp)
      ans = temp
      arr.push(temp) //只是一个栈结构
      continue
    }
    if (s.charAt(i) == '-' || (s.charAt(i) >= '0' && s.charAt(i) <= '9')) {
      let j = i + 1
      while (j < s.length) {
        if (s.charAt(j) == ',' || s.charAt(j) == ']') {
          ans.add(new NestedInteger(Number.parseFloat(s.substring(i, j))))
          i = j
          break
        }
        j++
      }
    }
    if (s.charAt(i) === ']') {
      if (arr.length > 0) {
        arr.splice(arr.length - 1, 1)
        ans = arr[arr.length - 1]
      }
    }
  }
  return header
}
