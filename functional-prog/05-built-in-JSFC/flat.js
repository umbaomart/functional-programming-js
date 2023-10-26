/**
 * flat()
 * The flat() function creates a new array with all sub-array elements
 * concatenated into it recursively up to the specified depth.
 *
 * recursion - a function that calls itself
 */

export function flat() {

  const arr1 = [1, 2, 3, 4, [5, 6]];

  display(arr1.flat());

  const arr2 = [1, 2, 3, 4, [[[5, 6]]]];

  const arr3 = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]];

  // display(arr2.flat(2));
  // display(arr2.flat(Infinity));
  display(arr3.flat(0));
  display(arr3.flat(Infinity));

}