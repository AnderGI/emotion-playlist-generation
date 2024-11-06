/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset:"ts-jest",
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json'
    }
  },
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};