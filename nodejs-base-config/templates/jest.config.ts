module.exports = {
  setupFiles: [
    '<rootDir>/tests/.jest/setEnvVars.ts',
  ],
  verbose: true,
  testEnvironment: 'node',
  roots: [
    '<rootDir>/tests',
    '<rootDir>/src',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/handlers/**/*.{ts,tsx,js,jsx}',
    '<rootDir>/src/services/**/*.{ts,tsx,js,jsx}',
  ],
  coverageThreshold: {
    global: {
      lines: 50,
      statements: 50,
      functions: 50,
    },
  },
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$':'@swc/jest',
  },
  moduleNameMapper: {
    '#node-web-compat': './node-web-compat-node.js',
    '@tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1',
  },
  testTimeout: 500
};