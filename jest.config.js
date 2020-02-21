const path = require('path');

const config = {
  testEnvironment: 'jest-environment-jsdom-fourteen',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js,tsx,jsx}',
    '!<rootDir>/src/Model/**/*.{ts,js}'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js',
    'jest-canvas-mock'
  ],
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec).(j|t)s?(x)'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/jest/__mocks__/styleMock.js',
    'shogunApplicationConfig': path.resolve(__dirname, 'jest/config.js')
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(ol|antd|(rc-*[a-z]*)|css-animation))'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ]
};

if (process.env.E2E_TEST_MODE === 'true') {
  delete config.testEnvironment;
  config.collectCoverage = false;
  config.collectCoverageFrom = undefined;
  config.preset = 'jest-puppeteer';
  config.testMatch = [
    '<rootDir>/e2e/**/?(*.)(spec).(j|t)s?(x)'
  ]
}

module.exports = config;
