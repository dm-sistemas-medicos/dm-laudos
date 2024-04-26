const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/app/contexts/*",
    "!src/**/layout.tsx",
    "!src/**/page.tsx",
  ],
  coverageThreshold: {
    global: {
      statements: 95.85,
      branches: 100,
      functions: 78.26,
      lines: 95.85,
    },
  },
};

module.exports = createJestConfig(config);
