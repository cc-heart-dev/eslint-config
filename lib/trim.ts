/**
 * @author xchen
 * @description trim去除字符串的两边的空格
 * @Date 2022-02-19
 */

/**
 * 除去首尾的空格
 * @param str
 * @returns
 */
export function trimRegExp1(str: string) {
  const reg = /^\s+|\s+$/g
  return str.replace(reg, '')
}

/**
 * 匹配全部的非字符串的数拿出来 替代原字符串
 * @param str
 * @returns
 */
export function trimRegExp2(str: string) {
  const reg = /^\s*((?:[\w\W])*?)\s*$/g
  return str.replace(reg, '$1')
}
