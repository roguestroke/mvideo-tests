import {
  randomDateStr,
  randomNumber,
  randomString,
} from "./fakers";
import { faker } from "@faker-js/faker";
import { UpdateBooking, Booking } from "../../types/booking.types";

export const createRandomBooking = (): Booking => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  totalprice: randomNumber(50, 500),
  depositpaid: faker.datatype.boolean(),
  bookingdates: {
    checkin: randomDateStr(),
    checkout: randomDateStr(),
  },
  additionalneeds: randomString(10, 20),
});

export const createRandomUpdateBooking = (): UpdateBooking => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  totalprice: randomNumber(50, 500),
  depositpaid: faker.datatype.boolean(),
  bookingdates: {
    checkin: randomDateStr(),
    checkout: randomDateStr(),
  },
  additionalneeds: randomString(10, 20),
});
