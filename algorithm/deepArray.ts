// 层级嵌套数组
const num = 3

const arr = new Array(num).fill(0)

function deepArray(len, lastLen, arr) {
  if (len >= lastLen) return
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(num).fill(0)
    deepArray(len + 1, lastLen, arr[i])
  }
}

// 差值 + 1 为当前层级
deepArray(1, 3, arr)

console.log(arr)
