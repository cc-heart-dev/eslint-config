/**
 * @author xchen
 * @description 格式化java初始化数据代码
 * @Date 2022-02-12
 */


/**
 * @description 初始化数组格式化成字符串
 * @param 
 */

function stringFormatInitArray(str: string): string {
  return str.replace(/\[/g, '{').replace(/\]/g, "}")
}



export {}