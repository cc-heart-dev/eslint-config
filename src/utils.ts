import { prefix } from "./constant.js"

export function useName(...args: string[]): string {
  return [prefix, ...args].join('/')
}