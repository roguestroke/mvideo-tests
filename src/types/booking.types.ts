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

export interface CreateBookingResponse {
  bookingid: number;
  booking: Booking;
}

export interface UpdateBooking extends Partial<Booking> {}
