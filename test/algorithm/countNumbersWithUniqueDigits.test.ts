
const countNumbersWithUniqueDigits  = require('../../algorithm/countNumbersWithUniqueDigits').default


test('example', () => {
  expect(countNumbersWithUniqueDigits(0)).toBe(1)
})
test('example1',() => {
  expect(countNumbersWithUniqueDigits(2)).toBe(91)
})


test('example2',() => {
  expect(countNumbersWithUniqueDigits(3)).toBe(739)
})
