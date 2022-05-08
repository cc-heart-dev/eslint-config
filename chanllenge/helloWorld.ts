/**
 * @author heart
 * @description
 * @Date 2022-04-10
 * @see: https://github.com/type-challenges/type-challenges/blob/master/questions/13-warm-hello-world/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */

type HelloWorld = string // expected to be a string

/* _____________ 测试用例 _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
