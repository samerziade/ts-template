// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config')
module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/config.ts',
    '!<rootDir>/src/run/*.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/types.ts',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'd.ts'],
}
