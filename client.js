module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "flowtype",
        "filenames",
        "class-property",
        "lodash-fp"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules"]
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
        "react/jsx-indent": [
            "error", 4
        ],
        "react/jsx-indent-props": [
            "error", 4
        ],
        "react/sort-comp": [
            "error", {
                order: [
                    "type-annotations",
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "render"
                ]
            }
        ],
        "filenames/match-exported": [
            "error",
            ["kebab", "camel", "pascal", null]
        ],
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/jsx-a11y/mouse-events-have-key-events": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "import/prefer-default-export": 0,
        "react/forbid-prop-types": 0,
        "react/no-danger": 0,
        "react/default-props-match-prop-types": 1,
        "class-methods-use-this": 0,
        "react/require-default-props": 0,
        "react/no-array-index-key": 0,
        "react/prefer-stateless-function": 0,
        "no-underscore-dangle": [
            "error", {
                "allow": ["__taus"]
            }
        ],
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
        "flowtype/use-flow-type": "error"
    }
};
