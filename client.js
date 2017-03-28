module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "filenames",
    "class-property",
    "lodash-fp"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules"
        ]
      }
    }
  },
  "env": {
    "node": true,
    "browser": true,
    "mocha": true,
    "es6": true,
    "jest": true
  },
  "globals": {
    "__taus": true
  },
  "rules": {
    "quotes": [
      "error",
      "backtick"
    ],
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    "react/jsx-indent": [
      "error",
      4
    ],
    "react/jsx-indent-props": [
      "error",
      4
    ],
    "filenames/match-exported": "error",
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": 0,
    "react/no-danger": 0,
    "class-methods-use-this": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "__taus"
        ]
      }
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "class-property/class-property-semicolon": [
      "error",
      "always"
    ],
    "lodash-fp/consistent-compose": [
      "error",
      "pipe"
    ],
    "lodash-fp/consistent-name": [
      "error",
      "_"
    ],
    "lodash-fp/no-argumentless-calls": "error",
    "lodash-fp/no-chain": "error",
    "lodash-fp/no-extraneous-args": "error",
    "lodash-fp/no-extraneous-iteratee-args": "error",
    "lodash-fp/no-partial-of-curried": "error",
    "lodash-fp/no-single-composition": "error",
    "lodash-fp/prefer-compact": "error",
    "lodash-fp/prefer-composition-grouping": "error",
    "lodash-fp/prefer-flat-map": "error",
    "lodash-fp/prefer-get": "error",
    "lodash-fp/use-fp": "error"
  }
};
