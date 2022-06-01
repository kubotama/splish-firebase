const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    // aliasを定義 （tsconfig.jsonのcompilerOptions>pathsの定義に合わせる）
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/hooks/(.*)$": "<rootDir>/pages/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
