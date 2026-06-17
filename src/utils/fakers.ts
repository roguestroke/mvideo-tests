import { faker } from "@faker-js/faker";
import { Booking, UpdateBooking } from "../types/booking.types";

export const createRandomBooking = (): Booking => {
  const checkin = faker.date.soon({ days: 5 });
  const checkout = faker.date.soon({ days: 10, refDate: checkin });

  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 50, max: 500 }),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: checkin.toISOString().split("T")[0],
      checkout: checkout.toISOString().split("T")[0],
    },
    additionalneeds: faker.helpers.arrayElement([
      "Breakfast",
      "Lunch",
      "Dinner",
      "None",
    ]),
  };
};

export const createRandomUpdateBooking = (): UpdateBooking => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  totalprice: faker.number.int({ min: 200, max: 1000 }),
  depositpaid: faker.datatype.boolean(),
  bookingdates: {
    checkin: faker.date.soon().toISOString().split("T")[0],
    checkout: faker.date.soon({ days: 7 }).toISOString().split("T")[0],
  },
  additionalneeds: faker.helpers.arrayElement([
    "Breakfast",
    "Spa",
    "Dinner",
  ]),
});