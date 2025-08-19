import { test, expect, type Page } from '@playwright/test';

import { MenuPage } from '../src/pages/menu-page';


test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    const menuPage = new MenuPage(page);
    await page.goto('/');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.timeSleep(2)
    await menuPage.luckyDay.verifyLuckyDayCelebration();

  });
});