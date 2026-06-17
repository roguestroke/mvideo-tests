export interface Booking {
  id?: number;
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


export interface UpdateBooking extends Partial<Omit<Booking, 'id'>> {}