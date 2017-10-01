/**
 * Get the sum of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function sum (numbers) {
  return numbers.reduce((acc, number) => acc + number)
}

/**
 * Get the square of a number.
 *
 * @param {Number} number - Number to be squared
 * @returns {Number} - Square of the number
 */
function square (number) {
  return Math.pow(number, 2)
}

/**
 * Get the mean of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function mean (numbers) {
  return sum(numbers) / numbers.length
}

function sumOfSquaresOfDifference (numbers) {
  const mean_val = mean(numbers)

  return numbers.reduce((acc, number) => {
    const difference = number - mean_val
    const squared = Math.pow(difference, 2)

    return acc + Math.pow(number - mean_val, 2)
  }, 0)
}

/**
 * Get the variance of a list of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function variance (numbers) {
  return sumOfSquaresOfDifference(numbers) / numbers.length
}

/**
 * Get the standard deviation of a list of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function standardDeviation (numbers) {
  return sumOfSquaresOfDifference(numbers) / numbers.length
}

export {
  sum, square, mean, variance, standardDeviation
}
