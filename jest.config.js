const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/app/layout.tsx"],
  coverageThreshold: {
    global: {
      statements: 85.71,
      branches: 97.91,
      lines: 85.71,
      functions: 71.42,
    },
  },
};

module.exports = createJestConfig(config);
