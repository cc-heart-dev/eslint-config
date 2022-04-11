const numberOfLines = require('../../algorithm/numberOfLines').default

test('example', () => {
  expect(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'bbbcccdddaaa')).toEqual(
    [2, 4]
  )
})
