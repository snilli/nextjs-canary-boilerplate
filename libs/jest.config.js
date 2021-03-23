module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  setupFiles: [
    'reflect-metadata',
  ],
  name: 'libs',
  displayName: 'libs',
  rootDir: './../',
  testMatch: [
    '<rootDir>/libs/tests/**/*.test.ts',
  ],
}
