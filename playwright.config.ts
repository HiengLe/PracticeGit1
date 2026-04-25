/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config({
   path:process.env.TEST_ENV ? `./env-files/.env.${process.env.TEST_ENV}` : './env-files/.env.dev',
});  
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  //grep: /@sanity|@UI|@API|@Smoke/, // Chạy các test có tag @sanity, @UI, @API hoặc @Smoke
  // grepInvert: /@sanity|@UI|@API|@Smoke/, // Chạy các test không có tag @sanity, @UI, @API hoặc @Smoke

  // globalSetup: './global-setup.ts',
  testDir: './tests',
  /* Run tests in files in parallel */
  // expect: {
  //   maxDiffPixels: 100, 
  //   maxDiffPixelRatio: 0.05,
  // },
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{open: 'always'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // baseURL: 'https://restful-booker.herokuapp.com',
    // extraHTTPHeaders: {
    //   Accept: 'application/json',
      // "Content-Type": 'application/json',
      // Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    // },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute: 'data-test',
    trace: 'on',
    // storageState: "./playwright/.auth/auth.json",
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'setup',
    //   testMatch: /.*\.setup\.ts/, // sử dụng nhiều tệp toàn cục
    //   //testMatch: 'global.setup.ts', // nếu chỉ sử dụng 1 tệp toàn cục có thể sử dụng tên tệp trực tiếp
    // },
  
    {
      name: 'chromium',
      //dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'], 
      //storageState: "./playwright/.auth/auth.json" 
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
