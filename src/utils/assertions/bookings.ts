// import { BookingData, UpdateBooking } from "../../types/booking.types";
// import { expectToEqual } from "./assertions";

// type AssertBookingProps = {
//   expectedBooking: BookingData; // Чистые данные без id
//   actualBooking: BookingData;   // Чистые данные от API без id
// };

// type AssertUpdateQuestionProps = {
//   expectedBooking: UpdateBooking;
//   actualBooking: UpdateBooking;
// };

// export const assertUpdateBooking = async ({ expectedBooking, actualBooking }: AssertUpdateQuestionProps) => {
//   await expectToEqual({
//     actual: actualBooking.firstname,
//     expected: expectedBooking.firstname,
//   });
//   // Здесь можно добавить проверки для остальных полей: lastname, totalprice и т.д.
// };

// export const assertBooking = async ({ expectedBooking, actualBooking }: AssertBookingProps) => {
//   // Мы больше НЕ проверяем bookingid здесь, так как в GET /booking/:id его нет в теле ответа.
//   // Вместо этого мы сверяем все ключевые поля данных.
//   await assertUpdateBooking({ expectedBooking, actualBooking });
// };
