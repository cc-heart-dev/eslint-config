// 千分位
function formatMoney(str: string) {
  const reg = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g
  // 全局匹配的时候 replace会进行多次匹配 因此在匹配的时候 $1的的值为每次匹配到的值
  // $1 匹配的有很多
  return str.replace(reg, function () {
    return RegExp.$1 + ','
  })
}

function formatMoney_a(str) {
  const reg = /(?!^)(?<![\-+])(?!=\.\d*)((?<!\.\d*))(?=(\d{3})+(\.|$))/g
  return str.replace(reg, ',')
}
export { formatMoney, formatMoney_a }
