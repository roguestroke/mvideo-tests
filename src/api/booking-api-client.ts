import test, { APIRequestContext, APIResponse, expect } from "@playwright/test";
import { Booking, UpdateBooking } from "../types/booking.types";
import { APIClient } from "./client";
import { APIRoutes } from "../utils/constants/routes";

export class BookingsApiClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getBooking(bookingId: number | undefined): Promise<APIResponse> {
    return await test.step(`Getting booking with id "${bookingId}"`, async () => {
      return await this.context.get(`${APIRoutes.Bookings}/${bookingId}`);
    });
  }

  async createBooking(data: Booking): Promise<APIResponse> {
    return await test.step(`Creating booking with "${data}"`, async () => {
      return await this.context.post(APIRoutes.Bookings, {
        data,
      });
    });
  }

  async updateBooking(
    bookingId: number,
    data: UpdateBooking,
    token: string,
  ): Promise<APIResponse> {
    return await test.step(`Updating booking with id "${bookingId}"`, async () => {
      return await this.context.put(`${APIRoutes.Bookings}/${bookingId}`, {
        headers: {
          Cookie: `token=${token}`,
        },
        data,
      });
    });
  }

  async deleteBooking(bookingId: number, token: string): Promise<APIResponse> {
    return await test.step(`Deleting booking with id "${bookingId}"`, async () => {
      return await this.context.delete(`${APIRoutes.Bookings}/${bookingId}`, {
        headers: {
          Cookie: `token=${token}`,
        },
      });
    });
  }

  async createBookingAPI(data: Booking): Promise<Booking> {
    const response = await this.createBooking(data);
    expect(response.status()).toBe(200);
    return await response.json();
  }
}
