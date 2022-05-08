class A {
  a = 1
  b = 2
}

type as = keyof A
const aObj: as = 'a' // "a" | "b"
export {}
