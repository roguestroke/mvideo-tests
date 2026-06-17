import { test as base } from '@playwright/test';
import { PagesFixture, pagesFixture } from './ui-fixtures';
import { combineFixtures } from '../utils/fixtures';
import { apiFixtures, BookingsFixture  } from './api-fixtures';
import { contextPagesFixture } from './context-pages';

export const test = base.extend<BookingsFixture  & PagesFixture >(
  combineFixtures(contextPagesFixture, apiFixtures, pagesFixture)
);

export { expect } from '@playwright/test';
