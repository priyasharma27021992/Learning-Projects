//flatten( [1, [2,3], [4,[5,[6]]]] )

const flatten = (arr) => {
  console.log(arr);
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
};

console.log(flatten([1, [2, 3], [4, [5, [6]]]]));

var merged = [].concat.apply([], [1, [2, 3], [4, [5, [6]]]]);

console.log(merged);
