module.exports = {
  plugins: ["flowtype"],
  extends: ["prettier/flowtype"],
  rules: {
    "flowtype/define-flow-type": `error`,
    "flowtype/no-dupe-keys": `error`,
    "flowtype/no-primitive-constructor-types": `error`,
    "flowtype/use-flow-type": `error`,
    "flowtype/array-style-complex-type": `error`,
    "flowtype/no-types-missing-file-annotation": `error`
  }
};
