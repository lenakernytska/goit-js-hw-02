function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    if (array.length > 0) {
      total += array[i];
    } else {
      return 0;
    }
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
