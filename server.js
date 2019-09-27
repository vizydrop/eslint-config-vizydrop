module.exports = {
  extends: [`airbnb-base`, `prettier`],
  parser: `babel-eslint`,
  plugins: [`filenames`, `class-property`, `promise`, `node`],
  env: {
    node: true,
    browser: true
  },
  overrides: [
    {
      files: [
        `test.js`,
        `*.test.js`,
        `*.test.jsx`,
        `*.tests.js`,
        `*.tests.jsx`,
        `*.mocks.js`,
        `*.mock.js`,
        `**/__tests__/**.js`,
        `**/__mocks__/**.js`,
        `**/__tests__/**.jsx`,
        `**/tests/**/*.js`
      ],
      env: {
        node: true,
        browser: true,
        mocha: true,
        jest: true
      },
      rules: {
        "node/no-unpublished-require": 0
      }
    }
  ],
  rules: {
    "implicit-arrow-linebreak": 0,
    "max-depth": [1, 4],
    "max-nested-callbacks": [1, 4],
    "max-params": [1, 4],
    "max-statements": [1, 15],
    "max-len": [
      `error`,
      120,
      4,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    "no-plusplus": 0,
    quotes: [`error`, `backtick`],
    "prefer-destructuring": 0,
    "filenames/match-exported": [`error`, [`kebab`, `camel`, `pascal`, null]],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "no-underscore-dangle": 2,
    "object-curly-spacing": [`error`, `never`],
    "arrow-parens": [`error`, `always`],
    "class-property/class-property-semicolon": [`error`, `always`],
    "promise/no-return-wrap": 2,
    "promise/param-names": 2,
    "promise/no-promise-in-callback": 1,
    "promise/no-callback-in-promise": 1,
    "promise/no-new-statics": 2,
    "no-restricted-properties": [
      0,
      {
        object: `Math`,
        property: `pow`
      }
    ],
    "func-names": [1, `as-needed`],
    "node/no-unpublished-require": 2,
    "no-nested-ternary": 0,
    "space-before-function-paren": 0
  }
};
