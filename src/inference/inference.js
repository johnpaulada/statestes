import { sum, square, squaredSum } from '../basic/basic'
import { crossreduce } from '../util/crossreduce'
import { interpolate } from '../util/interpolate'
import tTable from '../tables/t-table'

// TODO: Test this
function getTCrit (df, marginOfError = 0.05) {
  const margin = `${marginOfError}`

  if (df > 30 && df < 40) {
    return interpolate(df, 30, 40, tTable[margin]['30'], tTable[margin]['40'])
  } else if (df > 40 && df < 60) {
    return interpolate(df, 40, 60, tTable[margin]['40'], tTable[margin]['60'])
  } else if (df > 60 && df < 120) {
    return interpolate(df, 60, 120, tTable[margin]['60'], tTable[margin]['120'])
  } else if (df > 120) {
    return tTable[margin].Infinity
  }

  return tTable[margin][df]
}

// TODO: Test this
function getMM ({ squaredSum, sumSquared, size }) {
  return squaredSum - (sumSquared / size)
}

// TODO: Make function cleaner
/**
 * Get t value of paired samples.
 *
 * @param {Array} numbers - An array of numbers
 * @param {Array} twoTailed - Is two tailed test
 * @returns {Number} - The t value
 */
function pairedTValue (numbers, twoTailed = true) {
  const sampleSize = numbers[0].length
  const diffs = crossreduce(numbers, (acc, number) => acc - number)
  const diffSquareds = diffs.map(square)
  const diffSum = sum(diffs)
  const diffSquaredSum = sum(diffSquareds)
  const diffSumSquared = square(diffSum)
  const numerator = diffSum / sampleSize
  const rootNumerator = diffSquaredSum - (diffSumSquared / sampleSize)
  const rootDenominator = sampleSize * (sampleSize - 1)
  const denominator = Math.sqrt(rootNumerator / rootDenominator)
  const t = numerator / denominator

  return t
}

/**
 * Get t value of independent samples.
 *
 * @param {Array} numbers - An array of numbers
 * @param {Array} twoTailed - Is two tailed test
 * @returns {Number} - The t value
 */
function independentTValue (numbers, twoTailed = true) {
  const GROUP1_INDEX = 0
  const GROUP2_INDEX = 1
  const group1 = {}
  const group2 = {}
  group1.data = numbers[GROUP1_INDEX]
  group2.data = numbers[GROUP2_INDEX]
  group1.size = group1.data.length
  group2.size = group2.data.length
  group1.squared = group1.data.map(square)
  group2.squared = group2.data.map(square)
  group1.sum = sum(group1.data)
  group2.sum = sum(group2.data)
  group1.mean = group1.sum / group1.size
  group2.mean = group2.sum / group2.size
  group1.squaredSum = sum(group1.squared)
  group2.squaredSum = sum(group2.squared)
  group1.sumSquared = square(group1.sum)
  group2.sumSquared = square(group2.sum)
  group1.mm = getMM(group1)
  group2.mm = getMM(group2)

  const numerator = group1.mean - group2.mean
  const rootTerm1 = (group1.mm + group2.mm) / (group1.size + group2.size - 2)
  const rootTerm2 = (1 / group1.size) + (1 / group2.size)
  const denominator = Math.sqrt(rootTerm1 * rootTerm2)
  const t = numerator / denominator

  return t
}

/**
 * Check if paired t-test result is significant.
 *
 * @param {Array} numbers - An array of numbers
 * @param {Array} marginOfError - The margin of error
 * @param {Array} twoTailed - Is two tailed test
 * @returns {Object} - Contains calculated t, critical t, and significance.
 */
function pairedTTest (numbers, marginOfError = 0.05, twoTailed = true) {
  const GROUP1_INDEX = 0
  const df = numbers[GROUP1_INDEX].length - 1
  const tCalc = pairedTValue(numbers, twoTailed)
  const tCrit = getTCrit(df, marginOfError)
  const isSignificant = Math.abs(tCalc) > tCrit

  return { calc: tCalc, crit: tCrit, isSignificant }
}

/**
 * Check if independent t-test result is significant.
 *
 * @param {Array} numbers - An array of numbers
 * @param {Array} marginOfError - The margin of error
 * @param {Array} twoTailed - Is two tailed test
 * @returns {Object} - Contains calculated t, critical t, and significance.
 */
function independentTTest (numbers, marginOfError = 0.05, twoTailed = true) {
  const GROUP1_INDEX = 0
  const GROUP2_INDEX = 1
  const df = numbers[GROUP1_INDEX].length - 1 + numbers[GROUP2_INDEX].length
  const tCalc = independentTValue(numbers, twoTailed)
  const tCrit = getTCrit(df, marginOfError)
  const isSignificant = Math.abs(tCalc) > tCrit

  return { calc: tCalc, crit: tCrit, isSignificant }
}

function joinLeftRightData (leftData, rightData) {
  if (leftData.length !== rightData.length) {
    throw new Error('Data arrays with different sizes')
  }

  const data = []
  for (let i = 0; i < leftData.length; i++) {
    if (typeof leftData[i] !== 'number' || typeof rightData[i] !== 'number') {
      throw new Error('Data arrays must contain only numbers')
    }

    data.push({
      right: rightData[i],
      left: leftData[i]
    })
  }
  return data
}

function getPearsonNumerator (data, leftSum, rightSum) {
  const multipliedSum = data.reduce((sum, current) => current.left * current.right + sum, 0)
  // console.log('Multiplied data sum:', multipliedSum);

  return multipliedSum - (leftSum * rightSum / data.length)
}

function getPearsonDenominator (data, leftSum, rightSum, squaredLeftSum, squaredRightSum) {
  return Math.sqrt(squaredLeftSum - square(leftSum) / data.length) * Math.sqrt(squaredRightSum - square(rightSum) / data.length)
}

/**
 * Calculate the Pearson R correlation between the two data arrays
 * The data array must be the same size
 *
 * @param {Array} leftData The left array of numbers
 * @param {Array} rightData The right array of numbers
 * @returns {Number} The pearson correlation between the two data arrays (number between -1 and 1)
 */
function pearsonR (leftData, rightData) {
  const leftSum = sum(leftData)
  // console.log('Left data sum:', leftSum);
  const rightSum = sum(rightData)
  // console.log('Right data sum:', rightSum);
  const squaredLeftSum = squaredSum(leftData)
  // console.log('Left squared data sum:', squaredLeftSum);
  const squaredRightSum = squaredSum(rightData)
  // console.log('Right squared data sum:', squaredRightSum);
  const data = joinLeftRightData(leftData, rightData)

  const denominator = getPearsonDenominator(data, leftSum, rightSum, squaredLeftSum, squaredRightSum)
  // console.log('Denominator:', denominator);
  if (!denominator) {
    throw new Error('No correlated data')
  }

  const numerator = getPearsonNumerator(data, leftSum, rightSum)
  // console.log('Numerator:', numerator);

  return numerator / denominator
}

export {
  pearsonR,
  pairedTValue,
  independentTValue,
  pairedTTest,
  independentTTest
}
