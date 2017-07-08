import { sum, standardDeviation } from '../basic/basic';
import { crossreduce } from '../util/crossreduce';
import t_table from '../tables/t-table.js';

function pairedTTest(numbers, twoTailed = true) {
  const sampleSize = numbers[0].length;
  const diffs = crossreduce(numbers, (acc, number) => acc - number);
  const diffSquareds = diffs.map(number => Math.pow(number, 2));
  const diffSum = sum(diffs);
  const diffSquaredSum = sum(diffSquareds);
  const diffSumSquared = Math.pow(diffSum, 2);
  const numerator = diffSum / sampleSize;
  const rootNumerator = diffSquaredSum - diffSumSquared / sampleSize;
  const rootDenominator = sampleSize * (sampleSize-1);
  const denominator = Math.sqrt(rootNumerator / rootDenominator);
  const t = numerator / denominator;

  return t;
}

export {
  pairedTTest
};
