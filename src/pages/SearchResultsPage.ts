import { Page } from "@playwright/test";
import { ProductCard } from "../components/product-card";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage {
  readonly productCard: ProductCard;

  constructor(public page: Page) {
    super(page);
    this.productCard = new ProductCard(page);
  }
}
