// jest.config.cjs
module.exports = {
  // other Jest configurations...
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
