import { renameRules } from "../utils";
import TsPlugin from '@typescript-eslint/eslint-plugin'

export function genTsRules() {
  return {
    ...renameRules(TsPlugin.configs.strict.rules!, { '@typescript-eslint': 'ts' }),
    'no-redeclare': 'off',
    'no-use-before-define': 'off',
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
    // 'ts/ban-types': ['error', { types: { Function: false } }], Deprecated
    'ts/consistent-type-definitions': ['error', 'interface'],
    'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
    'ts/method-signature-style': ['error', 'property'],
  }
}