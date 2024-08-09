module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs)$': ['babel-jest', { configFile: './babel.config.cjs' }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(preact|@testing-library/preact)/)'
  ],
  moduleNameMapper: {
    '^preact$': '<rootDir>/node_modules/preact/dist/preact.js',
    '^preact/hooks$': '<rootDir>/node_modules/preact/hooks/dist/hooks.js',
    '^@testing-library/preact$': '<rootDir>/node_modules/@testing-library/preact/dist/cjs/index.js'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.jsx'],
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};
