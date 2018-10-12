const serverConfig = require(`./server`);

module.exports = {
    ...serverConfig,
    "globals": {
        ...serverConfig.globals,
        "__taus": true,
        "__track": true
    },
    "rules": {
        ...serverConfig.rules,
        "react/jsx-indent": [
            "error", 4
        ],
        "react/jsx-indent-props": [
            "error", 4
        ],
        "react/sort-comp": [
            "error", {
                order: [
                    "displayName",
                    "defaultProps",
                    "propTypes",
                    "type-annotations",
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "render"
                ]
            }
        ],
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/jsx-a11y/mouse-events-have-key-events": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/no-danger": 0,
        "react/default-props-match-prop-types": 1,
        "react/require-default-props": 0,
        "react/no-array-index-key": 0,
        "react/prefer-stateless-function": 0,
        "react/no-access-state-in-setstate": 0,
        "react/jsx-one-expression-per-line": 0,
        "no-underscore-dangle": [
            "error", {
                "allow": ["__taus", "__track"]
            }
        ]
    }
};
