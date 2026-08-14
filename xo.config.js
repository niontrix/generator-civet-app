export default [
  {
    ignores: [
      "**/templates/**",
      "templates/**/vitest.config.js"
    ]
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
      "no-bitwise": "off",
    }
  }
];
