// eslint.config.mjs
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import vuePlugin from 'eslint-plugin-vue';

export default [
  {
    // 適用於所有檔案（js, jsx, ts, tsx, vue）
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      // 不再使用 ecmaFeatures，因 flat config 不再支援該屬性
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      vue: vuePlugin,
      '@stylistic/ts': stylisticTsPlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      camelcase: ['off', { properties: 'never' }],
      'no-unused-vars': 'off',
      'require-await': 'error',
      '@stylistic/ts/indent': ['error', 2, {
        SwitchCase: 1,
        ignoredNodes: [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
      }],
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@stylistic/ts/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none', requireLast: true },
          singleline: { requireLast: false },
        },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      'import/no-cycle': 'error',
      'no-use-before-define': 'warn',
      'space-before-blocks': 'off',
      '@stylistic/ts/space-before-blocks': 'error',
      '@stylistic/ts/type-annotation-spacing': 'error',
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
];
