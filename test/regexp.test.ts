const formatMoney = require('../lib/regexp').formatMoney
const formatMoney_a = require('../lib/regexp').formatMoney_a

test('formatMoney', () => {
  expect(formatMoney(123343 + '')).toBe('123,343')
})

test('formatMoney_a', () => {
  expect(formatMoney_a('123323')).toBe('123,323')
})
