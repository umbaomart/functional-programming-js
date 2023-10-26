/**
 * Built-in JS Functions
 * Function Way in JS (Functional Programming)
 * [1, 2, 3] | Map, Filter, Flat, Reduce
 *
 * Functional Programming Mindset - Don't worry about how the problem is solved,
 *  instead focus on what the problem is.
 */

export function map() {
  /**
   * map()
   * map() function creates a new array populated with the results
   *  of calling a providd function on every element in the calling array.
   */

  const addTwo = (number) => number + 2;

  const initialNumbers = [1, 2, 3, 4, 5];

  // const newNumbers = initialNumbers.map((number) => number + 2);
  const newNumbers = initialNumbers.map(addTwo);
  display(newNumbers);
}