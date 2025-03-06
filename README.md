# jakelint

## Installation

```sh
npm install --save-dev jakelint
```

## Usage

### Creating an ESLint Configuration File

In the root directory of your project, create a file named `eslint.config.js` with the following content:

```javascript
export { default } from 'jakelint';
```

This ensures that ESLint automatically loads the configuration provided by `jakelint` when executed.

### Updating the `scripts` Section in `package.json`

It is recommended to add the following scripts to your `package.json` for easier linting:

```json
"scripts": {
  "lint": "eslint -c eslint.config.js",
  "lint:fix": "eslint --fix -c eslint.config.js"
}
```

You can specify files or directories to lint when running the command, for example:

```sh
npm run lint
```

### Overriding TypeScript Configuration

If you need to specify a TypeScript configuration file (default is `tsconfig.json`), you can override it in `eslint.config.mjs`. For example, if you want to use a custom TypeScript configuration file:

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

## Commands

### Checking Code

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx,.vue
```

### Auto-fixing Issues

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix
```

## Contributing

If you have any suggestions or improvements, feel free to submit a Pull Request or open an Issue!

## License

[MIT License](LICENSE)
