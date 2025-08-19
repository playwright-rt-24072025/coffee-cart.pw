import { Locator, Page } from "@playwright/test";

const SELECTORS = {
  menuPageLocator: "//a[@aria-label='Menu page']",
  cardPageLocator: "//a[@aria-label='Card page']",
};

export class BasePage {
  protected readonly page: Page;
  protected readonly menuPageLink: Locator;
  protected readonly cardPageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuPageLink = this.page.locator(SELECTORS.menuPageLocator);
    this.cardPageLink = this.page.locator(SELECTORS.cardPageLocator);
  }

  async gotoMenuPage() {
    await this.menuPageLink.click();
  }

  async gotoCardPage() {
    await this.cardPageLink.click();
  }
  async timeSleep(s: number) {
    await new Promise((resolve) => setTimeout(resolve, s * 1000));
  }
}
