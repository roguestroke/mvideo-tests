import { test, expect } from "../../src/fixtures/test";
import {
  createRandomBooking,
  createRandomUpdateBooking,
} from "../../src/utils/booking";

test.describe("Booking tests", () => {
  test("Get booking by id", async ({ booking, bookingsClient }) => {
    const response = await bookingsClient.getBookingAPI(booking.bookingid);
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json).toEqual(booking.booking);
  });

  test("Create booking", async ({ bookingsClient }) => {
    const payload = createRandomBooking();
    const response = await bookingsClient.createBookingAPI(payload);
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json.booking).toEqual(payload);
  });

  test("Update booking data", async ({ booking, bookingsClient, token }) => {
    const payload = createRandomUpdateBooking();
    const response = await bookingsClient.updateBookingAPI(booking.bookingid, payload, token);
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json).toEqual(payload);
  });

  test("Delete booking", async ({ booking, bookingsClient, token }) => {
    const deletedBookingResponse = await bookingsClient.deleteBookingAPI(booking.bookingid, token);
    const getBookingResponse = await bookingsClient.getBookingAPI(booking.bookingid);

    expect(deletedBookingResponse.status()).toBe(201);
    expect(getBookingResponse.status()).toBe(404);
  });
});
