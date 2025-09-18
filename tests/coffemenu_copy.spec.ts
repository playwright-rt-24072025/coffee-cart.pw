
import { test} from '../src/fixtures/fixturePage';
import {expect} from "@playwright/test";


test.describe('Coffeemenu fixture of tests', () => {

  const testData = {
    username: 'testuser',
    password: 'password123'
  };

  test('2should allow me to add todo items', async ({ menuPage , data}) => {
    // const menuPage = new MenuPage(page);
    console.log(`Using test data: ${data.username}, ${data.password}`);
    menuPage
    await menuPage.clickOnDrink('Espresso');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.clickOnDrink('Espresso');
    await menuPage.timeSleep(2)
    await menuPage.luckyDay.verifyLuckyDayCelebration();
    console.log('Test data used successfully');

  });

  test('2should allow me to view the header page items', async ({ menuPage, cartPage, gitHubPage }) => {
    expect(await menuPage.isTotalBtnVisible()).toBeTruthy();
    await cartPage.page.goto('/cart');
    expect(await cartPage.verifyEmptyTitleIsVisible()).toBeTruthy();
    await cartPage.page.goto('/github');
    expect(await gitHubPage.getByPlaceholder('You can use this demo to learn DevTools features. We have tutorial and video to guide you.')).toBeTruthy();
  });
});
