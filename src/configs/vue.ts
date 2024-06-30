import { VueOptions, type Options } from "../types";
import { useName } from "../utils";
// @ts-ignore
import VuePlugin from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
// @ts-ignore
import TsParser from '@typescript-eslint/parser'
import { baseIgnorePatterns } from "../constant";
import { baseRules } from "./base-rule.js";
import { genTsRules } from "./shard";
import TsPlugin from '@typescript-eslint/eslint-plugin';

export function vue(options: Options & VueOptions = {}) {
  const { ignores = [], overrides = {}, languageOptionsOverrides = {}, parserOptionsOverrides = {} } = options

  const autoImportOptions = options.autoImport ? {
    computed: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineProps: 'readonly',
    onMounted: 'readonly',
    onUnmounted: 'readonly',
    reactive: 'readonly',
    ref: 'readonly',
    shallowReactive: 'readonly',
    shallowRef: 'readonly',
    toRef: 'readonly',
    toRefs: 'readonly',
    watch: 'readonly',
    watchEffect: 'readonly',
  } : {}

  const isTs = options.typescript
  const tsRules = isTs ? genTsRules() : {}
  const plugins = {
    'vue': VuePlugin
  }

  if (isTs) {
    Reflect.set(plugins, 'ts', TsPlugin)
  }

  return [
    {
      name: useName('vue', 'rules'),
      files: ['**/*.vue'],
      ignores: [...baseIgnorePatterns, ...ignores],
      languageOptions: {
        parser: parserVue,
        globals: {
          ...autoImportOptions
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: isTs ? TsParser : null,
          sourceType: 'module',
          ...parserOptionsOverrides
        },
        ...languageOptionsOverrides
      },
      plugins,
      rules: {
        ...baseRules,
        'no-use-before-define': 'off',
        ...tsRules,
        ...VuePlugin.configs.base.rules as any,
        ...VuePlugin.configs['vue3-essential'].rules as any,
        ...VuePlugin.configs['vue3-strongly-recommended'].rules as any,
        ...VuePlugin.configs['vue3-recommended'].rules as any,
        'vue/block-order': ['error', {
          order: ['script', 'template', 'style'],
        }],
        'vue/comment-directive': 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        // this is deprecated
        'vue/component-tags-order': 'off',
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': ['error', {
          order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
        }],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-indent': ['error', 2],
        'vue/html-quotes': ['error', 'double'],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-dupe-keys': 'off',
        'vue/no-empty-pattern': 'error',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-setup-props-reactivity-loss': 'off',
        'vue/no-sparse-arrays': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-html': 'off',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/space-infix-ops': 'error',
        'vue/html-self-closing': 'off',
        'vue/space-unary-ops': ['error', { nonwords: false, words: true }],
        ...overrides
      }
    }
  ]
}