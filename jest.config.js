const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/app/contexts/*"],
  coverageThreshold: {
    global: {
      statements: 96.23,
      branches: 100,
      functions: 80,
      lines: 96.23,
    },
  },
};

module.exports = createJestConfig(config);
