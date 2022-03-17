// 千分位
function formatMoney(str: string) {
  const reg = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g
  // 全局匹配的时候 replace会进行多次匹配 因此在匹配的时候 $1的的值为每次匹配到的值
  // $1 匹配的有很多
  return str.replace(reg, function () {
    return RegExp.$1 + ','
  })
}

function formatMoney_a(str: string) {
  const reg = /(?!^)(?<![\-+])((?<!\.\d*))(?=(\d{3})+(\.|$))/g
  return str.replace(reg, ',')
}
export { formatMoney, formatMoney_a }

// 判断字符串是否是纯数字
export function checkDigit(str: string): boolean {
  const reg = /^(\d*\.{0,1}\d*)$/
  return reg.test(str)
}

//获取小数点后的数字
export function radixPointDigit(str: string): string | null {
  const reg = /\.(\d.*)/
  const e = str.match(reg)
  return e && e[1] || null
}