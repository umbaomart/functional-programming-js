/**
 * reduce()
 * Runs a reducer callback function over all elements in array
 * Runs in ascending-index order, and accumulates them into single value
 * Reduces an array to a single value
 */

export function reduce() {

  const initialArray = [1, 2, 3, 4, 5];

  const multiply = initialArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });

  display(initialArray);
  display(multiply);

  display([1, 2, , 4].reduce((a, b) => a + b));
  display([1, 2, undefined, 4].reduce((a, b) => a + b));

  /**
   * Reduce can be difficult to understand
   * Developers must weigh in readability tradeoffs vs benefits of reduce
   * Clear documentation and comments are required
   */

}