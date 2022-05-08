const uniqueMorseRepresentations = require('../../algorithm/uniqueMorseRepresentations.ts').default

test('example', () => {
  expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2)
})


test('example', () => {
  expect(uniqueMorseRepresentations(['a'])).toBe(1)
})
