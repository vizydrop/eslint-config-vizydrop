module.exports = {
    "extends": "standard",
    "parser": "babel-eslint",
    "plugins": [
        "flowtype",
        "standard",
        "mocha"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
    },
    "env": {
        "node": true,
        "mocha": true,
    },
    "rules": {
        "semi": [
            "error", "always"
        ],
        "indent": [
            "error",
            4, {
                "SwitchCase": 1
            }
        ],
        "spaced-comment": [
            "off", "never"
        ],
        "space-before-function-paren": [
            "error", {
                "named": "never",
                "anonymous": "always"
            }
        ],
        "mocha/no-exclusive-tests": ["error"],
        "arrow-parens": [
            "error", "always"
        ],
        "complexity": [
            "warn",
            5
        ],
        "max-depth": [
            "warn",
            4
        ],
        "max-nested-callbacks": [
            "warn",
            4
        ],
        "max-params": [
            "warn",
            5
        ],
        "max-statements": [
            "warn",
            20
        ]
    }
};
