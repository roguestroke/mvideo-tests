import { JSONSchemaType } from 'ajv';
import { Booking, CreateBookingResponse } from '../../types/booking.types';

export const bookingSchema: JSONSchemaType<Booking> = {
  title: 'Booking',
  type: 'object',
  properties: {
    firstname: { type: 'string' },
    lastname: { type: 'string' },
    totalprice: { type: 'integer' },
    depositpaid: { type: 'boolean' },
    bookingdates: {
      type: 'object',
      properties: {
        checkin: { type: 'string' },
        checkout: { type: 'string' }
      },
      required: ['checkin', 'checkout'],
      additionalProperties: false
    },
    additionalneeds: { type: 'string' }
  },
  required: ['firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates', 'additionalneeds'],
  additionalProperties: false
};

export const createBookingResponseSchema: JSONSchemaType<CreateBookingResponse> = {
  title: 'CreateBookingResponse',
  type: 'object',
  properties: {
    bookingid: { type: 'integer' },
    booking: {
      type: 'object',
      properties: bookingSchema.properties,
      required: bookingSchema.required,
      additionalProperties: false
    }
  },
  required: ['bookingid', 'booking'],
  additionalProperties: false
};
