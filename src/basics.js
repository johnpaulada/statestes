/**
 * Get the sum of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
function sum(numbers) {
  return numbers.reduce((acc, number) => acc + number);
}

function meanBuilder(sum) {
  return numbers => sum(numbers) / numbers.length;
}

/**
 * Get the mean of an array of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
const mean = meanBuilder(sum);

function varianceBuilder(mean) {
  return numbers => {
    mean_val = mean(numbers);

    const variance = numbers => {
      const sum_diff_squares = numbers.reduce((acc, number) => {
        return acc + Math.pow(number - mean_val, 2)
      }, 0);

      return sum_diff_squares / numbers.length;
    };

    return variance(numbers);
  }
}

/**
 * Get the variance of a list of numbers
 *
 * @param {Array} numbers - An array of numbers
 * @returns {Number}
 */
const variance = varianceBuilder(mean);
