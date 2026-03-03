import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 2000,
    hookTimeout: 2000,
    browser: {
      screenshotFailures: false
    },
    expect: {
      poll: {
        interval: 5
      }
    }
  }
});
