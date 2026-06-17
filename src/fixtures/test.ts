import { test as base } from '@playwright/test';
import { PagesFixture, pagesFixture } from './ui-fixtures';
import { combineFixtures } from '../utils/fixtures';
import { apiFixtures, BookingsFixture  } from './api-fixtures';

export const test = base.extend<BookingsFixture  & PagesFixture >(
  combineFixtures( apiFixtures, pagesFixture)
);

export { expect } from '@playwright/test';
