import globals from "globals";
import jest from "eslint-plugin-jest";

/** @type {import("xo").FlatXoConfig} */
export default [
  {
    ignores: [
      "**/templates/**"
    ]
  },
  {
    files: [
      "**/*.test.js",
      "**/*.spec.js",
    ],
    ...jest.configs["flat/recommended"],
    languageOptions: {
      ...jest.configs["flat/recommended"].languageOptions,
      globals: {
        ...globals.jest
      }
    }
  },
  {
    space: true,
    semicolon: true,
    rules: {
      "@stylistic/quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: "always"
        }
      ],
      "@stylistic/comma-dangle": ["error", {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline"
      }],
      "@stylistic/object-curly-spacing": ["error", "always", {
        arraysInObjects: true,
        overrides: {
          ImportDeclaration: "always"
        }
      }],
    }
  }
];
