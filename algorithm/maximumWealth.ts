/**
 * @author heart
 * @description 最富有客户的资产总量
 * @Date 2022-04-14
 * @see https://leetcode-cn.com/problems/richest-customer-wealth/
 */

function maximumWealth(accounts: number[][]): number {
  let ans = 0;
  accounts.forEach(val => {
    ans = Math.max(ans, val.reduce((pre, val) => {
      pre += val
      return pre
    }, 0))
  })
  return ans;
};

export default maximumWealth;