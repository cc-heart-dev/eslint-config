import { lexicalOrder, lexicalOrder1 } from '../../algorithm/lexicalOrder'

describe('test array is lexicalOrder', () => {
  it('is equal', () => {
    for (let i = 1; i < 13; i++) {
      expect(lexicalOrder(i)).toEqual(expect.arrayContaining(lexicalOrder1(i)))
      expect(lexicalOrder1(i)).toEqual(expect.arrayContaining(lexicalOrder(i)))
    }
  })
})
