/**
 * Recursion
 * A function calling itself is recursion.
 * Needs a stopping point, if not ends up calling itself forever.
 * Could be a harder concept to understand.
 */

export function recursion() {

  // Looping approach
  const incrementByOne = (number) => {
    for (let i = number; i <= 10; i++) {
      display(i);
    }
  }

  // incrementByOne(1);

  // Recursion approach
  const incrementByOneRecursive = (number) => {
    if (number === 11) return;
    display(number);

    // calls itself
    incrementByOneRecursive(number + 1);
  }

  incrementByOneRecursive(1);

}