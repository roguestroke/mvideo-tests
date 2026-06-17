import {
  randomBoolean,
  randomDateStr,
  randomNumber,
  randomString,
} from "../utils/fakers";
import { UpdateBooking, Booking } from "../types/booking.types";

export const createRandomBooking = (): Booking => ({
  firstname: randomString(5, 10),
  lastname: randomString(5, 12),
  totalprice: randomNumber(50, 500),
  depositpaid: randomBoolean(),
  bookingdates: {
    checkin: randomDateStr(),
    checkout: randomDateStr(),
  },
  additionalneeds: randomString(10, 20),
});

export const createRandomUpdateBooking = (): UpdateBooking => ({
  firstname: randomString(5, 10),
  lastname: randomString(5, 12),
  totalprice: randomNumber(50, 500),
  depositpaid: randomBoolean(),
  bookingdates: {
    checkin: randomDateStr(),
    checkout: randomDateStr(),
  },
  additionalneeds: randomString(10, 20),
});
