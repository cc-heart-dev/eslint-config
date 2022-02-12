/**
 * @author xchen
 * @description 
 * @Date 2022-02-12
 */

const formatDate = require('../lib/time').formatDate
const addPrefixZero = require('../lib/time').addPrefixZero


test('format addPrefixZero', () => {
  expect(addPrefixZero(2022,4)).toBe('2022')
})

test('format today time to yyyy-MM-dd', () => {
  expect(formatDate()).toBe('2022-02-12')
})
