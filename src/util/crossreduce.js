// TODO: Extract functions from this function
// TODO: test this

export const crossreduce = (arrays, reducer) => {
  const arrayLength = arrays[0].length;
  const arrayCount = arrays.length;
  const mapped = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const slice = [];
    for (let j = 0; j < arrayCount; j += 1) {
      slice.push(arrays[j][i]);
    }
    mapped.push(slice.reduce(reducer));
  }

  return mapped;
};
