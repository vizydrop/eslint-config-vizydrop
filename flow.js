module.exports = {
  plugins: ["flowtype"],
  rules: {
    "flowtype/boolean-style": `error`,
    "flowtype/define-flow-type": `error`,
    "flowtype/delimiter-dangle": [`error`, `only-multiline`],
    "flowtype/generic-spacing": [`error`, `never`],
    "flowtype/no-dupe-keys": `error`,
    "flowtype/no-primitive-constructor-types": `error`,
    "flowtype/object-type-delimiter": [`error`, `comma`],
    "flowtype/semi": `error`,
    "flowtype/space-after-type-colon": [`error`, `always`],
    "flowtype/space-before-generic-bracket": `error`,
    "flowtype/space-before-type-colon": `error`,
    "flowtype/union-intersection-spacing": `error`,
    "flowtype/use-flow-type": `error`,
    "flowtype/array-style-complex-type": `error`,
    "flowtype/no-types-missing-file-annotation": `error`
  }
};
