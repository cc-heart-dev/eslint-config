import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { readFileSync } from 'fs'

const jsonStr = readFileSync('./tsconfig.json', { 'encoding': 'utf8' })
const tsConfig = JSON.parse(jsonStr)

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    }
  ],
  // 外部依赖
  external: [
    'eslint-plugin-unused-imports',
    'globals',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-plugin-vue',
    'vue-eslint-parser'
  ],
  // 插件
  plugins: [resolve(), commonjs(), json(), typescript(tsConfig)],
}
