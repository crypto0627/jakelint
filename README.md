# jakelint

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