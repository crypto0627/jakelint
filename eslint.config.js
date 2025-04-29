// index.js
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import reactPlugin from 'eslint-plugin-react';

// Base rules that will be shared across all configurations
const baseRules = {
  // Basic formatting rules
  quotes: ['error', 'single'],
  'comma-dangle': ['error', 'always-multiline'],
  semi: ['error', 'never'],
  'no-trailing-spaces': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'eol-last': ['error', 'always'],
  'no-unexpected-multiline': 'error',
  
  // Indentation
  indent: 'off',
  '@stylistic/indent': ['error', 2, { 
    SwitchCase: 1,
    VariableDeclarator: { var: 2, let: 2, const: 3 },
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    offsetTernaryExpressions: true,
  }],

  // Naming conventions
  camelcase: ['error', { 
    properties: 'always',
    ignoreDestructuring: false,
    ignoreImports: false,
    ignoreGlobals: false,
  }],
  '@typescript-eslint/naming-convention': [
    'error',
    { selector: 'default', format: ['camelCase'] },
    { selector: ['class', 'interface', 'typeAlias', 'typeParameter'], format: ['PascalCase'] },
    { selector: 'enum', format: ['PascalCase'] },
    { selector: 'enumMember', format: ['UPPER_CASE'] },
    { selector: 'classProperty', modifiers: ['static'], format: ['UPPER_CASE'] },
    { selector: 'objectLiteralProperty', format: null },
    { selector: 'import', format: ['camelCase', 'PascalCase'] },
  ],

  // TypeScript specific rules
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
  '@typescript-eslint/no-unused-vars': ['error', { 
    args: 'after-used',
    ignoreRestSiblings: true,
    varsIgnorePattern: '^_',
  }],
  '@typescript-eslint/explicit-function-return-type': ['error', {
    allowExpressions: true,
    allowTypedFunctionExpressions: true,
    allowHigherOrderFunctions: true,
  }],
  '@typescript-eslint/explicit-member-accessibility': ['error', {
    accessibility: 'explicit',
    overrides: {
      constructors: 'no-public',
    },
  }],
  '@typescript-eslint/member-ordering': ['error', {
    default: [
      'public-static-field',
      'protected-static-field',
      'private-static-field',
      'public-instance-field',
      'protected-instance-field',
      'private-instance-field',
      'public-constructor',
      'protected-constructor',
      'private-constructor',
      'public-static-method',
      'protected-static-method',
      'private-static-method',
      'public-instance-method',
      'protected-instance-method',
      'private-instance-method',
    ],
  }],

  // Import rules
  'import/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    'newlines-between': 'always',
    alphabetize: { order: 'asc', caseInsensitive: true },
  }],
  'import/no-cycle': 'error',
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: false,
    optionalDependencies: false,
    peerDependencies: false,
  }],

  // Other rules
  'no-use-before-define': ['error', { 
    functions: false,
    classes: false,
    variables: false,
  }],
  'no-plusplus': 'error',
  'no-useless-concat': 'error',
  'prefer-template': 'error',
  'require-await': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/await-thenable': 'error',
};

export default [
  {
    ignores: ['node_modules/**', 'out/**', 'dist/**', '*.json', '*.css', '*.html'],
  },
  // Base configuration (for .ts files)
  {
    files: ['src/**/*.ts'],
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
    rules: baseRules,
  },
  // React configuration (for .tsx files)
  {
    files: ['src/**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      '@stylistic': stylisticPlugin,
      react: reactPlugin,
    },
    rules: {
      ...baseRules,
      // React specific rules
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      }],
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-string-refs': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unused-state': 'error',
      'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
      'react/self-closing-comp': 'error',
      'react/sort-comp': ['error', {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      }],
    },
  },
  // Vue configuration (for .vue files)
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        parser: {
          js: tsParser,
          ts: tsParser,
          jsx: tsParser,
          tsx: tsParser,
          vue: vueParser,
        },
        project: './tsconfig.json',
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
      ...baseRules,
      // Vue specific rules
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
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],
      'vue/multiline-html-element-content-newline': ['error', {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false,
      }],
      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      }],
    },
  },
];
