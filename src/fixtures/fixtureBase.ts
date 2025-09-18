import {test as base} from '@playwright/test';
import defineConfig from '../../playwright.config';



export const test = base.extend({
    page: async ({ page }, use) => {
        // Go to the starting url before each test.
        

        await page.setViewportSize({ width: 1280, height: 720 });

        // before each test
        console.log('Starting a new test with a fresh page');
        await page.goto(`${defineConfig.use?.baseURL}`);
        await use(page);
        console.log('Test finished, cleaning up...');

        // after each test
        await page.close();
        console.log('Browser closed');


    }
});