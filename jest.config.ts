import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(axios)/)"],
  testTimeout: 10000, // Increase to 70 seconds
};

export default config;
