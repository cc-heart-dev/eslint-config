import { Options } from "../types";
import { useName } from "../utils.js";
import { pluginUnusedImports } from "../plugins.js";
import { baseIgnores } from "../constant.js";
import { baseRules } from "./base-rule.js";
import globals from 'globals'

export function javascript(options: Options = {}) {
  const { overrides = {}, languageOptionsOverrides = {}, ignores = [] } = options

  return [
    {
      name: useName('javascript', 'setup'),
      ignores: [...baseIgnores, ...ignores],
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            // includes react js
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
        ...languageOptionsOverrides
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      }
    },
    {
      name: useName('javascript', 'rules'),
      files: ['**/*.?([cm])js'],
      plugins: {
        'unused-imports': pluginUnusedImports
      },
      rules: {
        ...baseRules,
        ...overrides
      },
    }
  ]
}
