import { Locator, Page } from "@playwright/test";

const SELECTORS = {
  menuPageLocator: "//a[@aria-label='Menu page']",
  cartPageLocator: "//a[@aria-label='Cart page']",
  githubPageLocator: "//a[@aria-label='GitHub page']"
};

export class BasePage {
  protected readonly page: Page;
  protected readonly menuPageLink: Locator;
  protected readonly cartPageLink: Locator;
  protected readonly githubPageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuPageLink = this.page.locator(SELECTORS.menuPageLocator);
    this.cartPageLink = this.page.locator(SELECTORS.cartPageLocator);
    this.githubPageLink = this.page.locator(SELECTORS.githubPageLocator);
  }

  async gotoMenuPage() {
    await this.menuPageLink.click();
  }

  async gotoCartPage() {
    await this.cartPageLink.click();
  }

  async gotoGithubPage() {
    await this.githubPageLink.click();
  }

  async timeSleep(s: number) {
    await new Promise((resolve) => setTimeout(resolve, s * 1000));
  }
}
