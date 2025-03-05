module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
    '@stylistic/ts',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    camelcase: [
      'off',
      {
        properties: 'never',
      },
    ],
    'no-unused-vars': 'off',
    'require-await': 'error',
    indent: 'off',
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
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@stylistic/ts/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    'import/no-cycle': 'error',
    'no-use-before-define': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/no-unsafe-function-type': 'warn',
    '@typescript-eslint/no-wrapper-object-types': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['default'],
        format: ['camelCase'],
      },
      {
        selector: ['class', 'interface', 'typeAlias', 'typeParameter'],
        format: ['PascalCase'],
      },
      {
        selector: ['enum'],
        format: ['PascalCase'],
        custom: {
          regex: '.*Enum$',
          match: true,
        },
      },
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
      },
      {
        selector: ['classProperty'],
        modifiers: ['static'],
        format: ['UPPER_CASE'],
      },
      {
        selector: ['objectLiteralProperty'],
        format: null,
      },
      {
        selector: ['import'],
        format: ['camelCase', 'PascalCase'],
      },
    ],
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
  overrides: [
    // JavaScript / JSX 檔案（加入 ESLint 官方建議）
    {
      files: ['*.js', '*.jsx'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      extends: [
        'eslint:recommended',
      ],
      rules: {
        // 關閉需要 TypeScript 型別資訊的規則
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    // TypeScript / TSX 檔案（保留原本設定，可加入 TSX 的 JSX 特性）
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {},
    },
    // Vue 檔案（採用 Vue 官方建議）
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        // Vue SFC 中的 <script> 區塊使用 TypeScript 解析器
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['vue'],
      extends: [
        'plugin:vue/vue3-recommended', // 若你使用 Vue 2，請改用 'plugin:vue/recommended'
      ],
      rules: {},
    },
  ],
}
