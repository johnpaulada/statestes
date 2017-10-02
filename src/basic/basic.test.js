import { sum, squaredSum, mean } from './basic.js'

test('Adding 1, 2, and 3 equals 6', () => {
  expect(sum([1, 2, 3])).toBe(6)
})

test("Squared adding 1, 2 and 3 equals 14", () => {
  expect(squaredSum([1, 2, 3])).toBe(14);
})

test('Mean of 1, 2, and 3 equals 2', () => {
  expect(mean([1, 2, 3])).toBe(2)
})

test('Mean of 2, 2, and 2 equals 2', () => {
  expect(mean([2, 2, 2])).toBe(2)
})
