import { Page } from "@playwright/test";
import { SearchField } from "./search-field";
import { LocationModal } from "./location-modal";

export class Header {
  readonly searchField: SearchField;
  readonly locationModal: LocationModal;

  constructor(public page: Page) {
    this.searchField = new SearchField(page);
    this.locationModal = new LocationModal(page);
  }
}
