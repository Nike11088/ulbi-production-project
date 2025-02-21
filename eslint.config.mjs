import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "object-curly-spacing": ["error", "always"],
      "indent": ["error", 2],
      "semi": ["error", "never"],
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-deprecated": "off"
    },
  },
  {
    ignores: [
      "cypress",
      "node_modules",
      "public",
      "src/assets",
      ".gitignore",
      ".prettierrc",
      ".prettierignore",
      "cypress.config.js",
      "eslint.config.mjs",
    ],
  },
];
