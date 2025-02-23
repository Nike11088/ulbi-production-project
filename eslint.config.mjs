import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import i18next from 'eslint-plugin-i18next'

/** @type {import('eslint').Linter.Config[]} */
export default [
  i18next.configs['flat/recommended'],
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'keyword-spacing': ['error', { 'after': true }],
      'space-before-blocks': ['error', 'always'],
      'quotes': ['error', 'single'],
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-deprecated': 'off'
    },
  },
  {
    ignores: [
      'cypress',
      'node_modules',
      'public',
      'src/assets',
      '.gitignore',
      '.prettierrc',
      '.prettierignore',
      'cypress.config.js',
      'eslint.config.mjs',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
