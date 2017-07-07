import { standardDeviation } from '../basic/basic';
import { crossreduce } from '../util/crossreduce';

function pairedTTest(numbers, twoTailed = true) {
  const diffs = crossreduce([[1, 2], [1, 2]], (acc, number) => acc + number, 0);
  const diffSquareds = diffs.map(number => Math.pow(number, 2));

  return diffSquareds;
}

export {
  pairedTTest
};
