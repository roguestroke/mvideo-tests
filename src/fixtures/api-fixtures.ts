
import { CreateBookingResponse } from "../types/booking.types";
import { getDefaultAPIContext } from "../utils/default-context";
import { getAuthAPIClient } from "../api/auth-api-client";
import { BookingsApiClient } from "../api/booking-api-client";
import { Fixtures } from "@playwright/test";
import { createRandomBooking } from "../utils/data/booking";

export type BookingsFixture = {
  bookingsClient: BookingsApiClient;
  booking: CreateBookingResponse;
  token: string;
};

export const apiFixtures: Fixtures<BookingsFixture> = {
  bookingsClient: async ({}, use) => {
    const apiContext = await getDefaultAPIContext();
    const bookingsClient = new BookingsApiClient(apiContext);

    await use(bookingsClient);
  },

  booking: async ({ bookingsClient }, use) => {
    const randomBooking = createRandomBooking();
    const booking = await bookingsClient.createBooking(randomBooking);

    await use(booking);
  },

  token: async ({}, use) => {
    const authClient = await getAuthAPIClient();

    const response = await authClient.getAuthTokenApi();
    const { token } = await response.json();

    await use(token);
  },
};
