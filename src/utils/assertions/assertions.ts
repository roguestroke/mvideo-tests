// import { expect, test } from '@playwright/test';

// type ExpectToEqual<T> = {
//   actual: T;
//   expected: T;
// };

// type ExpectStatusCode = { api: string } & Omit<ExpectToEqual<number>, 'description'>;

// export const expectToEqual = async <T>({ actual, expected }: ExpectToEqual<T>) => {
//   await test.step(`Checking that ${actual} is equal to ${expected}`, async () => {
//     (expect(actual) as any).toEqual(expected);
//   });
// };

// export const expectStatusCode = async ({ actual, expected }: ExpectStatusCode): Promise<void> => {
//   await test.step(`Checking that response status code for API ${actual} equal to ${expected}`, async () => {
//     await expectToEqual({ actual, expected });
//   });
// };