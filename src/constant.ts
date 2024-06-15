export let prefix = 'cc-heart'

export const baseIgnorePatterns = [
  '**/node_modules/',
]

export function defineNamespace(namespace: string) {
  prefix = namespace
}