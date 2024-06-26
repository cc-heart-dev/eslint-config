import TsPlugin from '@typescript-eslint/eslint-plugin';
// @ts-ignore
import TsParser from '@typescript-eslint/parser';
import { baseIgnorePatterns } from '../constant.js';
import { pluginUnusedImports } from '../plugins.js';
import { type Options } from '../types';
import { useName } from "../utils.js";
import { baseRules } from "./base-rule.js";
import { genTsRules } from './shard.js';

export function typescript(options: Options = {}) {
  const { ignores = [], overrides = {}, languageOptionsOverrides = {}, parserOptionsOverrides = {} } = options

  return [
    {
      name: useName('typescript', 'setup'),
      files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
      ignores: [...baseIgnorePatterns, ...ignores],
      languageOptions: {
        parser: TsParser,
        parserOptions: {
          project: true,
          tsconfigRootDir: process.cwd(),
          sourceType: 'module',
          ...parserOptionsOverrides
        },

        ...languageOptionsOverrides
      },
      plugins: {
        ts: TsPlugin,
        'unused-imports': pluginUnusedImports
      }
    },
    {
      name: useName('typescript', 'rules'),
      files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
      ignores: [...baseIgnorePatterns, ...ignores],
      rules: {
        ...baseRules,
        ...genTsRules(),
        ...overrides
      }
    },
    {
      files: ['**/*.d.?([cm])ts'],
      name: useName('typescript', 'dts'),
      rules: {
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      name: useName('typescript', 'test'),
      rules: {
        'no-unused-expressions': 'off',
      },
    }
  ]
}