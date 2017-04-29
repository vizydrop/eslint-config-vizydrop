module.exports = {
    "extends": "standard",
    "parser": "babel-eslint",
    "plugins": [
        "flowtype",
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
        "max-len": [
            "error",
            120,
            4, {
                "ignoreUrls": true,
                "ignoreComments": false,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true
            }
        ],
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
        "mocha/no-exclusive-tests": ["error"]
    }
};
