import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    passWithNoTests: true,
    clearMocks: true,
    include: ['**/*.e2e-spec.ts'],
    reporters: ['verbose'],
    testTimeout: 120000,
  }
})