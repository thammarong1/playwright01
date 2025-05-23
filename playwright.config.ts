import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  
  
  projects: [

    {
      name: 'API_Mobile',
      testDir: './src/tests/API_Mobile', // โฟลเดอร์สำหรับ API_Mobile
      use: {
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        ...devices['Desktop Chrome'], // ใช้ Desktop Chrome เป็นพื้นฐาน
      },
    },
    {
      name: 'API_Client',
      testDir: './src/tests/API_Client', // โฟลเดอร์สำหรับ API_Client
      use: {
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        ...devices['Desktop Chrome'], // ใช้ Desktop Chrome เป็นพื้นฐาน
      },
    },
    {
      name: 'UI',
      testDir: './src/tests/UI', // โฟลเดอร์สำหรับ UI
      use: {
        ignoreHTTPSErrors: true, 
        trace: 'on-first-retry',
        ...devices['Desktop Chrome'], // ใช้ Desktop Chrome เป็นพื้นฐาน
      },
    },

    // {
    //   name: 'Chromium Tests',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //   },
    // },
        // หากต้องการเพิ่มเบราว์เซอร์อื่น เช่น Firefox หรือ WebKit สามารถเพิ่มที่นี่ได้
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

 /* General settings */
 workers: 1, // รันทีละเทส (ปรับเพิ่มได้หากต้องการรันขนาน)
 maxFailures: 0, // ไม่หยุดแม้จะล้มเหลว
 retries: 0, // ไม่ retry
 fullyParallel: false, // รันเทสในไฟล์แบบ parallel
 //forbidOnly: !!process.env.CI, // ห้ามใช้ `test.only` ใน CI
 //reporter: 'html', // ใช้ HTML Report
reporter: [["line"], ["allure-playwright"]],


  

  /* Retry on CI only */
  //retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : 1,

  use: {
   // ignoreHTTPSErrors: true,
   // storageState: undefined,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   // trace: 'on-first-retry',
    //extraHTTPHeaders: {
    // "authorization": `Token ${process.env.ACCESS_TOKEN}`
    // }
  },
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});