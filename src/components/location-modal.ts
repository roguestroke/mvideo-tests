import { Locator, Page, expect } from "@playwright/test";

export class LocationModal {
  readonly locationTooltip: Locator;
  readonly confirmLocationBtn: Locator;
  readonly changeCityBtn: Locator;

  constructor(public page: Page) {
    this.locationTooltip = page.locator(".location-tooltip-content");
    this.confirmLocationBtn = this.locationTooltip.locator("button.location-confirm", { hasText: "Все верно" });
    this.changeCityBtn = page.locator(".header-shops-link, .location-text"); 
  }

  async confirmCurrentLocation(): Promise<void> {
    await expect(this.locationTooltip).toBeVisible({ timeout: 5000 });
    await this.confirmLocationBtn.click();
    await expect(this.locationTooltip).toBeHidden({ timeout: 5000 });
  }
}
