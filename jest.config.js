const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/layout.tsx",
    "!src/**/page.tsx",
  ],
  coverageThreshold: {
    global: {
      statements: 85.71,
      branches: 97.91,
      lines: 85.71,
      functions: 71.42,
    },
  },
  maxConcurrency: 4,
};

module.exports = createJestConfig(config);
