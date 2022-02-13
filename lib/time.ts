/**
 * @description 格式化时间
 * @param 
 */


function addPrefixZero(number: number = 0, target: number = 0): string | null {
  if (number === 0 && target === 0) return null;
  const count: number = (number + '').length;
  if (count < target) {
    let tempString: string = number + '';
    for (let i = 1; i <= target - count; i++) {
      tempString = '0' + tempString;
    }
    return tempString;
  }
  return number + '';
}


function formatDate(): string {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  return addPrefixZero(year, 4) + '-' + addPrefixZero(month, 2) + '-' + addPrefixZero(day, 2);
}

module.exports = {
  formatDate,
  addPrefixZero
}


export {}

