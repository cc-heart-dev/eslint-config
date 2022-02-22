/**
 * @author xchen
 * @description 格式化JSON字符串
 * @Date 2022-02-17
 */

export function formatJSON(obj: Object, space: number): string {
  return JSON.stringify(obj, null, 4)
}


/**
 * 格式化对象
 * @param obj 
 * @param space 
 */
export function jsonFormat(obj: Object, space: number) {
  var regEnter = /(?<=)/g
}
var str = "{'book':{'name':'JAVA编程','author':['Liu','Xu']},'num':222}";
// 匹配固定的换行符号
// var regEnter = /(?<=^\{)/g
// var regEnter = /(?<=[\}\:|\[|\]])/g
// 后置切换
var nextEnter = /(?<=[\{\[\,\]])/g

  console.log(nextEnter.exec("{'book':{'name':'JAVA编程','author':['Liu','Xu']},'num':222}"));
  
// 前置切换
var preEnter = /(?=\]|\}$)/g


str = str.replace(nextEnter, '\n').replace(preEnter, '\n');


// 正则缩进格式
var spaceRegexp = /(?<=[\{\,\[]\s+)(?=[\'\"])/g
  console.log(str = str.replace(spaceRegexp,'\t'));
  
// 设置缩进格式 使用递归实现JSON格式化
function priiter(str: string, space = 2) {
  
}

export { }