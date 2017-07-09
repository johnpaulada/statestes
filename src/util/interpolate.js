// TODO: test this
export const interpolate = (key, minKey, maxKey, minValue, maxValue) => {
  const keyDiff = maxKey - minKey;
  const valueDiff = maxValue - minValue;
  const sliceValue = valueDiff / keyDiff;
  const diff = key - minKey;
  const deltaValue = sliceValue * diff;
  const interpolatedValue = minValue + deltaValue;

  return interpolatedValue;
}
