const formatMoney = require('../lib/regexp').formatMoney
const formatMoney_a = require('../lib/regexp').formatMoney_a
const checkDigit = require('../lib/regexp').checkDigit
const replaceFileName = require('../lib/regexp').replaceFileName
const radixPointDigit = require('../lib/regexp').radixPointDigit
test('formatMoney', () => {
  expect(formatMoney(123343 + '')).toBe('123,343')
})

test('formatMoney_a', () => {
  expect(formatMoney_a('123323')).toBe('123,323')
})

test('check digit', () => {
  expect(checkDigit('213.342231')).toBeTruthy()
})


test('replaceFileName', () => {
  expect(replaceFileName('./names.html', 'detail')).toBe('./detail.html');
  expect(replaceFileName('/index.html', 'detail')).toBe('/detail.html');
  expect(replaceFileName('index.html', 'detail')).toBe('detail.html');
  expect(replaceFileName('pages/index.html', 'detail')).toBe('pages/detail.html');
  expect(replaceFileName('index.js', 'detail')).toBe('detail.js');
  expect(replaceFileName('pages/detail.js', 'names')).toBe('pages/names.js');
})

test('radixPointDigit', () => {
  expect(radixPointDigit('0.00')).toBe(0)
})