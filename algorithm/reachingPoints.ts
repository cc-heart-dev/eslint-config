/**
 * @author heart
 * @Date 2022-04-9
 * @see:https://leetcode-cn.com/problems/reaching-points/
 * @todo: 780. 到达终点
 * @description:给定四个整数 sx , sy ，tx 和 ty，如果通过一系列的转换可以从起点 (sx, sy) 到达终点 (tx, ty)，则返回 true，否则返回 false。
 * 从点 (x, y) 可以转换到 (x, x+y)  或者 (x+y, y)。
 */

function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
  // 逆向递推 由于 ty,tx => sy,sx 的每一次递推结果只能是 ty,tx中两个中大的减去小的 因此有：
  // 结果是到sx sy
  // tx ty 的临界值： 还需要排除一下tx 与 ty相等的情况
  while (tx > sx && ty > sy && tx !== ty) {
    if (ty > tx) {
      ty = ty - tx
    } else {
      tx = tx - ty
    }
  }

  // 如果有一个相等的情况
  if (tx === sx && ty === sy) return true

  if (tx === sx) {
    // 此时需要判断ty 和 sy的关系 ty<sy 可以直接return tx === sx 以后只能是 ty - tx 是否等于 sy ty === n * tx + sy
    return ty > sy && (ty - sy) % tx === 0
  }
  if (ty === sy) {
    // 上述相同
    return tx > sx && (tx - sx) % ty === 0
  }

  //因为范围都是正数 如果有 tx < sx || ty < sy 的 可以直接return false;
  return false
}

export default reachingPoints