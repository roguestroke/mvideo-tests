const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const LETTERS_WITH_NUMBERS = LETTERS + NUMBERS;

export const randomNumber = (start: number = 500, end: number = 2000): number =>
  Math.floor(Math.random() * (end - start + 1)) + start;

export const randomString = (start: number = 10, end: number = 20, charSet: string = LETTERS_WITH_NUMBERS): string => {
  let result = '';
  const length = randomNumber(start, end);
  for (let index = 0; index < length; index++) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    result += charSet.substring(randomPoz, randomPoz + 1);
  }
  return result;
};

export const randomBoolean = (): boolean => Math.random() < 0.5;

export const randomDateStr = (): string => {
  const date = new Date();
  date.setDate(date.getDate() + randomNumber(1, 30));
  return date.toISOString().split('T')[0];
};