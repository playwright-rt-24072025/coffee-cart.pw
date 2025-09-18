import { test, expect, type Page } from '@playwright/test';
import defineConfig from '../playwright.config';

import { MenuPage } from '../src/pages/menu-page';
import { CartPage } from '@pages/card-page';

test.describe('Coffeemenu fixture of tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(`${defineConfig.use?.baseURL}`);
  });


  test('should allow me to add todo items', async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.clickOnDrink('Espresso');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.timeSleep(2)
    await menuPage.luckyDay.verifyLuckyDayCelebration();

  });

  test('should allow me to view the header page items', async ({ page }) => {
    const menuPage = new MenuPage(page);
    expect(await menuPage.isTotalBtnVisible()).toBeTruthy();
    await page.goto('/cart');
    const cartPage = new CartPage(page);
    expect(await cartPage.verifyEmptyTitleIsVisible()).toBeTruthy();
    await page.goto('/github');
    expect(await page.getByPlaceholder('You can use this demo to learn DevTools features. We have tutorial and video to guide you.')).toBeTruthy();
  });
});
