/**
 * @author xchen
 * @description
 * @Date 2022-02-12
 */

const formatDate = require('../lib/time').formatDate
const addPrefixZero = require('../lib/time').addPrefixZero

test('format addPrefixZero', () => {
  expect(addPrefixZero(2022, 4)).toBe('2022')
})

test('format today time to yyyy-MM-dd', () => {
  const date = new Date()
  expect(formatDate()).toBe(
    addPrefixZero(date.getFullYear(), 4) +
      '-' +
      addPrefixZero(date.getMonth() + 1, 2) +
      '-' +
      addPrefixZero(date.getDate(), 2)
  )
})

// 测试循环添加
describe('test for loop', () => {
  for (let i = 0; i < 3; i++) {
    it('test for', () => {
      const date = new Date()
      expect(formatDate()).toBe(
        addPrefixZero(date.getFullYear(), 4) +
          '-' +
          addPrefixZero(date.getMonth() + 1, 2) +
          '-' +
          addPrefixZero(date.getDate(), 2)
      )
    })
  }
})

// 测试0的情况
test('format params 0 0 data', () => {
  expect(formatDate(0, 0)).toBeNull
})
