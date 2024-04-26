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
      statements: 95.78,
      branches: 100,
      functions: 76.19,
      lines: 95.78,
    },
  },
};

module.exports = createJestConfig(config);
