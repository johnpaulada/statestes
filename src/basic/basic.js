/**
 * Get the sum of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function sum(numbers) {
  return numbers.reduce((acc, number) => acc + number);
}

/**
 * Get the square of a number.
 *
 * @param {Number} number - Number to be squared
 * @returns {Number} - Square of the number
 */
function square(number) {
  return Math.pow(number, 2);
}

/**
 * Get the sum of the squares of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function squaredSum(numbers) {
  return numbers.reduce((acc, number) => acc + square(number), 0);
}

/**
 * Get the mean of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function mean(numbers) {
  return sum(numbers) / numbers.length;
}

function sumOfSquaresOfDifference(numbers) {
  const meanVal = mean(numbers);

  return numbers.reduce((acc, number) => {
    const difference = number - meanVal;
    const squared = square(difference);

    return acc + square(number - meanVal);
  }, 0);
}

/**
 * Get the variance of a list of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function variance(numbers) {
  return sumOfSquaresOfDifference(numbers) / numbers.length;
}

/**
 * Get the standard deviation of a list of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function standardDeviation(numbers) {
  return sumOfSquaresOfDifference(numbers) / numbers.length;
}

export {
  sum,
  square,
  squaredSum,
  mean,
  variance,
  standardDeviation,
};
