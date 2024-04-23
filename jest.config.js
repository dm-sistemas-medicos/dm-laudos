const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/app/layout.tsx"],
};

module.exports = createJestConfig(config);
