import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import * as tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        HTMLElement: "readonly",
        HTMLButtonElement: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-console": "error",
      eqeqeq: ["warn", "always"],
      curly: ["warn", "all"],
      semi: ["warn", "always"],
      quotes: ["warn", "single"],
      indent: ["warn", 2],
      "brace-style": ["warn", "1tbs"],
      "no-undef": ["warn", { typeof: true }],
    },
  },
];
