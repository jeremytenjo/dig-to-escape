import { defineConfig } from 'eslint/config'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import robloxTsPlugin from 'eslint-plugin-roblox-ts'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

import prettierConfig from './devtools/prettier/prettier.config.js'

export default defineConfig([
  eslintPluginPrettierRecommended,

  // Global settings
  {
    ignores: ['/out'],
  },

  // eslint config
  {
    files: ['eslint.config.js'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          ...prettierConfig,
        },
      ],
    },
  },

  // Settings for Roblox TS source files
  {
    basePath: 'src',
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        jsx: true,
        useJSXTextNode: true,
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'roblox-ts': robloxTsPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          ...prettierConfig,
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/consistent-type-imports': 2,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': 1,
      'no-useless-catch': 1,
      'no-async-promise-executor': 0,
      'react/jsx-uses-react': 0,
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'prefer-const': 2,
      'no-var': 2,
      'no-const-assign': 1,
      'no-this-before-super': 1,
      'no-unreachable': 2,
      'no-unneeded-ternary': 2,
      'import/no-anonymous-default-export': 0,
      'no-debugger': 1,
      'no-console': 0,
      'constructor-super': 1,
      'valid-typeof': 1,
      'arrow-body-style': ['error', 'always'],
    },
  },

  // Settings for Devtools source files
  {
    basePath: 'devtools',
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        jsx: true,
        useJSXTextNode: true,
        ecmaVersion: 2018,
        sourceType: 'module',
        project: 'devtools/tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          ...prettierConfig,
        },
      ],
      '@typescript-eslint/consistent-type-imports': 2,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': 1,
      'no-useless-catch': 1,
      'no-async-promise-executor': 0,
      'react/jsx-uses-react': 0,
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'prefer-const': 2,
      'no-var': 2,
      'no-const-assign': 1,
      'no-this-before-super': 1,
      'no-unreachable': 2,
      'no-unneeded-ternary': 2,
      'import/no-anonymous-default-export': 0,
      'no-debugger': 1,
      'no-console': 0,
      'constructor-super': 1,
      'valid-typeof': 1,
      'arrow-body-style': ['error', 'always'],
    },
  },
])
