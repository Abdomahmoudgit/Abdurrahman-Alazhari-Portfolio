import { defineConfig, devices } from "@playwright/test";

// End-to-end tests run against the production build (`npm run build` first).
// Locally they use the installed Google Chrome; in CI, Playwright's Chromium.
const PORT = 3200;

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  // A few workers only: every page view also makes the server optimize images.
  workers: process.env.CI ? 2 : 3,
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], ...(process.env.CI ? {} : { channel: "chrome" }) },
    },
  ],
  webServer: {
    command: `npx next start -p ${PORT} -H 127.0.0.1`,
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
