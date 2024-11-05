/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset:"ts-jest",
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};