import { sum, mean } from './basic.js';

test('Adding 1, 2, and 3 equals 6', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test('Mean of 1, 2, and 3 equals 2', () => {
  expect(mean([1, 2, 3])).toBe(2);
});

test('Mean of 2, 2, and 2 equals 2', () => {
  expect(mean([2, 2, 2])).toBe(2);
});
