const reachingPoints = require('../../algorithm/reachingPoints.ts').default


test('example', () => {
  expect(reachingPoints(10, 9, 10, 19)).toBeTruthy()
})


test('example1', () => {
  expect(reachingPoints(1,1,3,5)).toBeTruthy()
})


test('example2', () => {
  expect(reachingPoints(1,2,9999,2)).toBeTruthy()
})


test('example3', () => {
  expect(reachingPoints(1,1,2,2)).toBeFalsy()
})

test('example4', () => {
  expect(reachingPoints(1,1,1,1)).toBeTruthy()
})