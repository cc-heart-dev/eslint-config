import TsPlugin from '@typescript-eslint/eslint-plugin'
import TsParser from '@typescript-eslint/parser'
import { renameRules, useName } from "../utils.js";
import { baseIgnores } from '../constant.js';
import { type Options } from '../types';
import { baseRules } from "./base-rule.js";

export function typescript(options: Options = {}) {
  const { ignores = [], overrides = {}, languageOptionsOverrides = {} } = options
  const tsRules = renameRules(TsPlugin.configs.strict.rules!, { '@typescript-eslint': 'ts' })

  return [
    {
      name: useName('typescript', 'setup'),
      ignores: [...baseIgnores, ...ignores],
      languageOptions: {
        parser: TsParser,
        parserOptions: {
          sourceType: 'module',
        },

        ...languageOptionsOverrides
      },
      plugins: {
        ts: TsPlugin
      }
    },
    {
      name: useName('typescript', 'rules'),
      files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
      rules: {
        ...baseRules,
        ...tsRules,
        'no-redeclare': 'off',
        'ts/no-extra-semi': 'off',
        'ts/no-explicit-any': 'off',
        'ts/no-dynamic-delete': 'off',
        'ts/no-extraneous-class': 'off',
        'ts/no-import-type-side-effects': 'error',
        'ts/no-invalid-void-type': 'off',
        'ts/no-unused-vars': 'off',
        'ts/no-useless-constructor': 'off',
        'ts/triple-slash-reference': 'off',
        'ts/unified-signatures': 'off',
        'ts/no-non-null-assertion': 'off',
        'ts/no-loss-of-precision': 'error',
        'ts/no-redeclare': 'error',
        'ts/no-require-imports': 'error',
        'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'ts/prefer-ts-expect-error': 'error',
        'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'ts/ban-types': ['error', { types: { Function: false } }],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
        'ts/method-signature-style': ['error', 'property'],
        'ts/consistent-type-exports': ['error'],
        ...overrides
      }
    }
  ]
}