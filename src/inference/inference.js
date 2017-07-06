import { standardDeviation } from '../basic/basic';

function pairedTTest(numbers, twoTailed = true) {
  return standardDeviation(numbers);
}

export {
  pairedTTest
};
