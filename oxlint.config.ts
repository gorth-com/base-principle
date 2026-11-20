import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["unicorn", "typescript", "oxc"],
  categories: {
    correctness: "error",
  },
  rules: {
    // Keep existing empty or commented-out module entry points.
    "unicorn/no-empty-file": "off",
  },
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  ignorePatterns: ["node_modules/**", "dist/**", "coverage/**", "**/*.gen.*"],
});
