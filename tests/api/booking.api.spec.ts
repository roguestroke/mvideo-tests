import { test, expect } from "../../src/fixtures/test";
import { Booking, CreateBookingResponse } from "../../src/types/booking.types";
import { createRandomBooking, createRandomUpdateBooking } from "../../src/utils/data/booking";
import { bookingSchema, createBookingResponseSchema } from "../../src/utils/schema/booling-schema";
import { validateSchema } from "../../src/utils/schema/validator";

test.describe("Booking tests", () => {
  test("Get booking by id", async ({ booking, bookingsClient }) => {
    const response = await bookingsClient.getBookingAPI(booking.bookingid);
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json).toEqual(booking.booking);
    await validateSchema<Booking>({ schema: bookingSchema, json });
  });

  test("Create booking", async ({ bookingsClient }) => {
    const payload = createRandomBooking();
    const response = await bookingsClient.createBookingAPI(payload);
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json.booking).toEqual(payload);
    await validateSchema<CreateBookingResponse>({ schema: createBookingResponseSchema, json });
  });

  test("Update booking data", async ({ booking, bookingsClient, token }) => {
    const payload = createRandomUpdateBooking();
    const response = await bookingsClient.updateBookingAPI(booking.bookingid, payload, token);
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json).toEqual(payload);
    await validateSchema<Booking>({ schema: bookingSchema, json });
  });

  test("Delete booking", async ({ booking, bookingsClient, token }) => {
    const deletedBookingResponse = await bookingsClient.deleteBookingAPI(booking.bookingid, token);
    const getBookingResponse = await bookingsClient.getBookingAPI(booking.bookingid);

    expect(deletedBookingResponse.status()).toBe(201);
    expect(getBookingResponse.status()).toBe(404);
  });
});
