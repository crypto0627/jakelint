// index.js
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import vuePlugin from 'eslint-plugin-vue';

export default [
  {
    ignores: ['node_modules/**', 'out/**', 'dist/**', '*.json', '*.css', '*.html'],
  },
  {
    files: ['src/**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      '@stylistic': stylisticPlugin,
      vue: vuePlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      camelcase: 'off',
      'no-unused-vars': 'off',
      'require-await': 'error',
      indent: 'off',
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': [
        'warn',
        { ignoreParameters: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none', requireLast: true },
          singleline: { requireLast: false },
        },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      'import/no-cycle': 'error',
      'no-use-before-define': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn',
        { selector: 'default', format: ['camelCase'] },
        { selector: ['class', 'interface', 'typeAlias', 'typeParameter'], format: ['PascalCase'] },
        { selector: 'enum', format: ['PascalCase'], custom: { regex: '.*Enum$', match: true } },
        { selector: 'enumMember', format: ['UPPER_CASE'] },
        { selector: 'classProperty', modifiers: ['static'], format: ['UPPER_CASE'] },
        { selector: 'objectLiteralProperty', format: null },
        { selector: 'import', format: ['camelCase', 'PascalCase'] },
      ],
      'space-before-blocks': 'off',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      'no-plusplus': 'error',
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      '@typescript-eslint/await-thenable': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
    },
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      },
    },
    rules: {},
  },
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    processor: vuePlugin.processors['.vue'],
    rules: {},
  },
];
