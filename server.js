module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "mocha"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "mocha": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    "spaced-comment": [
      "off",
      "never"
    ],
    "space-before-function-paren": [
      "error",
      {
        "named": "never",
        "anonymous": "always"
      }
    ],
    "mocha/no-exclusive-tests": [
      "error"
    ]
  }
};
