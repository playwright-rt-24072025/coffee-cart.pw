import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";


export class CartPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }
}
