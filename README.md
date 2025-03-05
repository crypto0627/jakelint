以下是更新後的 README 範例，反映最新 ESLint flat config 機制，並支援 JavaScript、TypeScript、TSX、JSX 與 Vue，同時讓使用者可自行指定要檢查的檔案或目錄：

---

# jakelint

`jakelint` 是一個基於 ESLint flat config 機制的配置包，旨在為 Vue 3、Express 及其他現代 Web 開發環境提供一致的代碼風格與最佳實踐支持。  
此配置支援 JavaScript、TypeScript、TSX、JSX 與 Vue 檔案。

## 特性

- 採用 ESLint flat config 機制（ESLint v9 以上）
- 遵循 TypeScript 最佳實踐
- 內建 `@typescript-eslint` 規則集
- 支援 `import`、`jsdoc` 規則
- 使用 `@stylistic/ts` 確保代碼風格一致性
- 針對 Vue 3 與 Express 進行優化
- 不限定於固定目錄，使用者可自由指定檢查的檔案或目錄

## 安裝

```sh
npm install --save-dev jakelint
```

## 使用方法

### 建立 ESLint 配置文件

在您的專案根目錄下建立一個名為 `eslint.config.mjs` 的文件，內容如下：

```javascript
export { default } from 'jakelint';
```

這樣，當您執行 ESLint 時，將自動載入 `jakelint` 提供的配置。

### 修改 `package.json` 的 `scripts` 欄位

建議在 `package.json` 中添加以下腳本，以便使用 ESLint 進行代碼檢查：

```json
"scripts": {
  "lint": "eslint --ext .js,.jsx,.ts,.tsx,.vue",
  "lint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx,.vue"
}
```

使用者可在執行命令時自行指定要檢查的檔案或目錄，例如：

```sh
npm run lint -- your-folder
```

### 覆寫 TypeScript 設定

如果需要指定 TypeScript 設定檔（預設為 `tsconfig.json`），可在 `eslint.config.mjs` 中覆寫相關配置。例如，若您希望使用自訂的 TypeScript 設定檔：

```javascript
import baseConfig from 'jakelint';

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './your-tsconfig.json'
      }
    }
  }
];
```

## 相關命令

### 檢查代碼

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx,.vue
```

### 自動修復問題

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix
```

## 貢獻

如果您有任何建議或改進，歡迎提交 Pull Request 或 Issue！

## 授權

[MIT License](LICENSE)

---

以上即為更新後的 README，您可以根據專案需求進一步調整內容。