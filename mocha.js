module.exports = {
  plugins: ["mocha"],
  rules: {
    "mocha/handle-done-callback": 2,
    "mocha/no-nested-tests": 2,
    "mocha/no-pending-tests": 2,
    "mocha/no-return-and-callback": 2,
    "mocha/no-exclusive-tests": "error"
  }
};
