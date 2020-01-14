// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  collectCoverageFrom: ["{src,include}/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  reporters: ["default"],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'include'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
    "^utils(.*)$": "<rootDir>/utils/$1",
  },
  testMatch: ['<rootDir>/**/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
}


