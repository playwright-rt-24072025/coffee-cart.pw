import {test as base,} from "./fixtureBase";
import {expect} from "@playwright/test";
import defineConfig from '../../playwright.config';
import {MenuPage} from "../pages/menu-page";
import {CartPage} from "@pages/card-page";
import {GithubPage} from "@pages/github-page";


type MyFixtures = {
    menuPage: MenuPage;
    cartPage: CartPage;
    gitHubPage: GithubPage;
};

export const test = base.extend<MyFixtures>({
    menuPageGO: async ({ page }, use) => {
        const menuPage = new MenuPage(page);
        // before each test
        await page.goto(`${defineConfig.use?.baseURL}`);
        console.log('Navigated to baseURL');
        await use(menuPage);
        console.log('Finished using menuPage');
        // after each test
    },
    menuPage: async ({ page }, use) => {
        const menuPage = new MenuPage(page);
        // before each test
        console.log('Setting up MenuPage for the test');
        await use(menuPage);
        console.log('Finished using MenuPage');
        // after each test
    },
    cartPage: async ({ page }, use) => {
        // await page.goto(`${defineConfig.use?.baseURL}/cart`);
        const cartPage = new CartPage(page);
        console.log('Setting up CartPage for the test');
        await use(cartPage);
        console.log('Finished using CartPage');
    },
    gitHubPage: async ({ page }, use) => {
        const gitHubPage = new GithubPage(page);
        console.log('Setting up GithubPage for the test');
        await use(gitHubPage);
        console.log('Finished using GithubPage');
    },
    data: async ({}, use) => {
        const data = {
            username: 'testuser',
            password: 'password123'
        };
        console.log('Providing test data');
        await use(data);
        console.log('Finished using test data');
    }
});