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
export function radixPointDigit(str: string): number {
  const reg = /\.(\d.*)/
  const e = str.match(reg)
  return e && Number.parseInt(e[1]) || 0
}

/**
 * 替换任意文件名
 * @param path 
 * @param replaceName 
 * @returns 
 */
export function replaceFileName(path: string, replaceName: string): string | null {
  const reg = /\//g
  const regs = /(.*)\.(.*)$/
  if (reg.test(path)) {
    const pathArr = path.split('/')
    const result = pathArr[pathArr.length - 1].match(regs)
    if (result) {
      pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(result[1], replaceName)
      return pathArr.join('/')
    }
  } else {
    if (regs.test(path)) {
      return path.replace(RegExp.$1, replaceName)
    }
  }
  return null;
}