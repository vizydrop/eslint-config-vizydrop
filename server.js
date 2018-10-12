module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "flowtype",
        "filenames",
        "class-property",
        "lodash-fp"
    ],
    "env": {
        "node": true,
        "browser": true
    },
    "overrides": [
        {
            "files": [
                "test.js",
                "*.test.js",
                "*.test.jsx",
                "**/__tests__/**.js",
                "**/__mocks__/**.js",
                "**/__tests__/**.jsx",
                "**/tests/**/*.js"
            ],
            "env": {
                "node": true,
                "browser": true,
                "mocha": true,
                "jest": true
            },
        }
    ],
    "rules": {
        "max-depth": [1, 4],
        "max-nested-callbacks": [1, 4],
        "max-params": [1, 4],
        "max-statements": [1, 10],
        'max-len': [
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
        "no-plusplus": 0,
        "quotes": [
            "error", "backtick"
        ],
        "prefer-destructuring": 0,
        "function-paren-newline": ["error", "consistent"],
        "indent": [
            "error",
            4, {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                },
                CallExpression: {
                    arguments: 1
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: ['JSXElement', 'JSXElement *']
            }
        ],
        "filenames/match-exported": [
            "error",
            ["kebab", "camel", "pascal", null]
        ],
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "class-methods-use-this": 0,
        "no-underscore-dangle": 2,
        "object-curly-spacing": [
            "error", "never"
        ],
        "arrow-parens": [
            "error", "always"
        ],
        "class-property/class-property-semicolon": [
            "error", "always"
        ],
        "lodash-fp/consistent-compose": [
            "error", "pipe"
        ],
        "lodash-fp/consistent-name": [
            "error", "_"
        ],
        "lodash-fp/no-argumentless-calls": "error",
        "lodash-fp/no-chain": "error",
        "lodash-fp/no-extraneous-args": "error",
        "lodash-fp/no-extraneous-iteratee-args": "error",
        "lodash-fp/no-partial-of-curried": "error",
        "lodash-fp/no-single-composition": "error",
        "lodash-fp/prefer-compact": "error",
        "lodash-fp/prefer-flat-map": "error",
        "lodash-fp/prefer-get": "error",
        "lodash-fp/use-fp": "error",
        "lodash-fp/preferred-alias": ["error", {overrides: ["pipe", "first"]}],
        "flowtype/boolean-style": "error",
        "flowtype/define-flow-type": "error",
        "flowtype/delimiter-dangle": [
            "error", "only-multiline"
        ],
        "flowtype/generic-spacing": [
            "error", "never"
        ],
        "flowtype/no-dupe-keys": "error",
        "flowtype/no-primitive-constructor-types": "error",
        "flowtype/object-type-delimiter": [
            "error", "comma"
        ],
        "flowtype/semi": "error",
        "flowtype/space-after-type-colon": [
            "error", "always"
        ],
        "flowtype/space-before-generic-bracket": "error",
        "flowtype/space-before-type-colon": "error",
        "flowtype/union-intersection-spacing": "error",
        "flowtype/use-flow-type": "error",
        "flowtype/array-style-complex-type": "error",
        "flowtype/no-types-missing-file-annotation": "error"
    }
};
