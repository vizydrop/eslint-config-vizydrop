module.exports = {
  plugins: ["lodash-fp"],
  rules: {
    "lodash-fp/consistent-compose": [`error`, `pipe`],
    "lodash-fp/consistent-name": [`error`, `_`],
    "lodash-fp/no-argumentless-calls": `error`,
    "lodash-fp/no-chain": `error`,
    "lodash-fp/no-extraneous-args": `error`,
    "lodash-fp/no-extraneous-iteratee-args": `error`,
    "lodash-fp/no-partial-of-curried": `error`,
    "lodash-fp/no-single-composition": `error`,
    "lodash-fp/prefer-compact": `error`,
    "lodash-fp/prefer-flat-map": `error`,
    "lodash-fp/prefer-get": `error`,
    "lodash-fp/use-fp": `error`,
    "lodash-fp/preferred-alias": [`error`, { overrides: [`pipe`, `first`] }]
  }
};
