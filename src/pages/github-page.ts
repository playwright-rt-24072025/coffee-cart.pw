import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base"

export class GithubPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
}
