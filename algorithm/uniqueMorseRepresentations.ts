/**
 * @author heart
 * @description
 * @Date 2022-04-10
 * @see: https://leetcode-cn.com/problems/unique-morse-code-words/
 * @todo: 804. 唯一摩尔斯密码词
 */

// a-z 对应的摩斯密码
const key = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
]

function uniqueMorseRepresentations(words: string[]): number {
  const set: Set<string> = new Set()
  for (let i = 0; i < words.length; i++) {
    let str: string = ''
    for (let j = 0; j < words[i].length; j++) {
      const index = words[i].charCodeAt(j)
      str += key[index - 97]
    }
    set.add(str)
  }
  return set.size
}

export default uniqueMorseRepresentations
