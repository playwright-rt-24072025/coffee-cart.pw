import { expect, Locator, Page } from "@playwright/test";


const SELECTORS = {

  "yesBtn": "button:has-text('Yes, of course!')",
  "noBtn": 'button:has-text("Nah, I\'ll skip.")',
  "promo": "//*[@class='promo']"
};

export class LuckyDay {
private readonly page: Page;
private readonly promo: Locator;
private readonly yesBtn: Locator;
private readonly noBtn: Locator;

  constructor(private readonly bingoPage: Page) {
    this.page = bingoPage;
    this.promo = this.page.locator(SELECTORS.promo);
    this.yesBtn = this.page.locator(SELECTORS.yesBtn);
    this.noBtn = this.page.locator(SELECTORS.noBtn);
  }
  async clickYes() {
    await this.yesBtn.click();
  }
  async clickNo() {
    await this.noBtn.click();
  }
  async verifyLuckyDayCelebration() {
    await expect(this.yesBtn).toBeVisible();
    await expect(this.noBtn).toBeVisible();
    await expect(this.promo).toContainText("It's your lucky day! Get an extra cup of Mocha for $4.");
  }
  async isVisible() {
    await expect(this.promo).toBeVisible();
  }
}
