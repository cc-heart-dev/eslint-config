let user = {
  _name: 'Guest',
  get name() {
    console.log(this)
    return this._name
  },
}
const proxy = new Proxy(user, {
  has() {
    console.log('has')
    return true
  },
  get(target, p) {
    if (p in target) {
      return target[p]
    }
    return ''
  },
  /**
   * 对于 set 操作，它必须在成功写入时返回 true。
   * 如果我们忘记这样做，或返回任何假（falsy）值，则该操作将触发 TypeError。
   */

  set(target, p, value) {
    if (p in target) {
      target[p] = value
      return true
    }
    return false
  },
})

// console.log(proxy.name)
// proxy.name = '1'

// console.log(proxy)
console.log(proxy.name)

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    // console.log(target)
    // console.log(receiver)
    // console.log(receiver)
    console.log(target === user) // true

    return Reflect.get(target, prop, receiver)
  },
})

console.log(userProxy)

console.log(userProxy.name) // Guest

let admin = {
  __proto__: userProxy,
  _name: 'Admin',
}
//
console.log((admin as any).name) //// 输出：Guest

/**
 * target 为代理的对象（this对象） receiver 为调用的对象
 * Reflect 允许我们将操作符（new，delete，……）作为函数（Reflect.construct，Reflect.deleteProperty，……）执行调用
 */
