import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";
import { LuckyDay } from "../component/lucky_day";

const SELECTORS = {
  drinkElement: (drinkName: string) =>
    `//*[@id="app"]/div[2]/ul/li[1]/h4[normalize-space(text())='${drinkName}']/following-sibling::*`,
};

export class MenuPage extends BasePage {
  readonly luckyDay: LuckyDay;
  constructor(private readonly page: Page) {
    super(page);
    this.luckyDay = new LuckyDay(page);
  }

  async clickOnDrink(drinkName: string) {
    const drinkElement = await this.page.locator(
      SELECTORS.drinkElement(drinkName)
    );
    await drinkElement.click();
  }
}
