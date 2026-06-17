import {
  createRandomBooking,
  createRandomUpdateBooking,
} from "../../src/utils/fakers";
import { test, expect } from "../../src/fixtures/test";

test.describe("Booking tests", () => {
  test("Create booking", async ({ bookingsClient }) => {
    const payload = createRandomBooking();

    const response = await bookingsClient.createBooking(payload);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.bookingid).toBeGreaterThan(0);
    expect(body.booking).toEqual(payload);
  });

  test("Get booking by id", async ({ bookingsClient }) => {
    const payload = createRandomBooking();
    const created = await bookingsClient.createBooking(payload);
    const id = (await created.json()).bookingid;
    const response = await bookingsClient.getBooking(id);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual(payload);
  });

  test("Get unexisted booking", async ({ bookingsClient }) => {
    const response = await bookingsClient.getBooking(0);

    expect(response.status()).toBe(403);
  });

  test("Update booking data", async ({ bookingsClient, token }) => {
    const payload1 = createRandomBooking();
    const created = await bookingsClient.createBooking(payload1);
    const id = (await created.json()).bookingid;

    const payload2 = createRandomUpdateBooking();

    await bookingsClient.updateBooking(id, payload2, token);

    const response = await bookingsClient.getBooking(id);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual({
      ...payload2,
    });
  });

  test("Delete booking", async ({ bookingsClient, token }) => {
    const payload = createRandomBooking();
    const created = await bookingsClient.createBooking(payload);
    const id = (await created.json()).bookingid;

    const deleted = await bookingsClient.deleteBooking(id, token);

    expect(deleted.status()).toBe(201);

    const getResponse = await bookingsClient.getBooking(id);

    expect(getResponse.status()).toBe(404);
  });
});
