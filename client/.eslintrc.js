module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  plugins: ["@typescript-eslint", "svelte3", "import", "prettier"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/first": "off",
        "prettier/prettier": "off"
      }
    }
  ],
  rules: {
    "import/first": "error",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    "import/newline-after-import": ["error", { count: 1 }],
  },
  settings: {
    "svelte3/typescript": true
  },
};
