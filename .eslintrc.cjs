module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "no-use-before-define": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    "no-shadow": "off",
    "max-len": [
      "warn",
      {
        "code": 100
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".tsx"]
      }
    ],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-explicit-any": ["off"]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {}
    }
  }
}

