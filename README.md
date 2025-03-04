# jakelint

`jakelint` 是一個基於 ESLint 的 TypeScript 代碼風格與最佳實踐配置，適用於 Vue 3 和 Express 開發環境。

## 特性
- 遵循 TypeScript 最佳實踐
- 內建 `@typescript-eslint` 規則集
- 支援 `import`、`jsdoc` 規則
- 使用 `@stylistic/ts` 確保代碼風格一致性
- 針對 Vue 3 和 Express 進行優化

## 安裝
```sh
npm install --save-dev jakelint
```

## 使用方法
### 建立 `.eslintrc` 配置文件
在專案根目錄下新增 `.eslintrc` 檔案：

```json
{
  "extends": [
    "./node_modules/jakelint"
  ]
}
```

### 修改 `package.json` 的 `scripts` 欄位

```json
"scripts": {
  "eslint": "eslint -c .eslintrc \"./**/*.ts\""
}
```

### 覆寫 TypeScript 設定
如果需要指定 TypeScript 設定檔案（預設為 `tsconfig.json`），可在 `.eslintrc` 中添加：

```json
{
  "extends": [
    "./node_modules/jakelint"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

## 相關命令
### 檢查代碼
```sh
npx eslint . --ext .ts,.tsx,.vue,.js
```

### 自動修復問題
```sh
npx eslint . --ext .ts,.tsx,.vue,.js --fix
```

## 貢獻
如果有任何建議或改進，歡迎提交 Pull Request 或 Issue！

## 授權
[MIT License](LICENSE)