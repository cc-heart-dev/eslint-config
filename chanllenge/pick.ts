/**
 * @author heart
 * @description
 * @Date 2022-04-10
 * @see: https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
