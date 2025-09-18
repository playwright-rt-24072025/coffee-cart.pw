import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";


export class CartPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async verifyEmptyTitleIsVisible() : Promise<Boolean> {
    return await this.page.getByText('No coffee, go add some.').isVisible();
  }
}
