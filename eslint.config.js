// index.js
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['node_modules/**', 'out/**', 'dist/**', '*.json', '*.css', '*.html'],
  },
  // 默認配置（適用於 .ts 和 .js 文件）
  {
    files: ['src/**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      semi: ['error', 'never'],
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
  // React 配置（適用於 .tsx 和 .jsx 文件）
  {
    files: ['src/**/*.{tsx,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // 移除特定项目配置，避免解析错误
        // project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      semi: ['error', 'never'],
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
      // 移除需要类型检查的规则，因为我们不再使用 project 配置
      // '@typescript-eslint/no-floating-promises': 'error',
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
      // 移除需要类型检查的规则
      // '@typescript-eslint/await-thenable': 'error',
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
  // Vue 配置（適用於 .vue 文件）
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      '@stylistic': stylisticPlugin,
      vue: vuePlugin,
    },
    processor: vuePlugin.processors['.vue'],
    rules: {
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style']
      }],
      'vue/no-unused-components': 'error',
      'vue/no-unused-vars': 'error',
      'vue/no-v-html': 'error',
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/valid-v-bind': 'error',
      'vue/valid-v-if': 'error',
      'vue/valid-v-else': 'error',
      'vue/valid-v-else-if': 'error',
      'vue/valid-v-for': 'error',
      'vue/valid-v-model': 'error',
      'vue/valid-v-on': 'error',
      'vue/valid-v-show': 'error',
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      semi: ['error', 'never'],
      camelcase: 'off',
      'no-unused-vars': 'off',
      'require-await': 'error',
      indent: 'off',
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none', requireLast: true },
          singleline: { requireLast: false },
        },
      ],
      'import/no-cycle': 'error',
      'no-use-before-define': 'warn',
      'space-before-blocks': 'off',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      'no-plusplus': 'error',
      'no-useless-concat': 'error',
      'prefer-template': 'error',
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
