import { pearsonR } from './inference'

test('Pearson R small array', () => {
  expect(pearsonR(
    [1, 10],
    [2, 1]
  )).toBe(-1)
})

test('Pearson R big array', () => {
  expect(pearsonR(
    [1, 3, 4, 6, 9],
    [2, 3.5, 5, 8, 7]
  )).toBe(0.8732169121726039)
})
