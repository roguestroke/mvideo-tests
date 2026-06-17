// 1. Чистая сущность бронирования (используется в GET, PUT, PATCH)
export interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: {
    checkin: string;
    checkout: string;
  };
  additionalneeds: string;
}

// 2. Ответ при СОЗДАНИИ бронирования (POST /booking) — именно то, что вы прислали
export interface CreateBookingResponse {
  bookingid: number;
  booking: Booking; // Используем чистую сущность внутри
}

// 3. Тип для ОБНОВЛЕНИЯ бронирования (PATCH /booking/{id})
// Делает все поля чистой сущности опциональными
export interface UpdateBooking extends Partial<Booking> {}
