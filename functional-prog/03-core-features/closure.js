/**
 * Closure
 * A closure gives you access to an outer function’s scope from an inner function.
 * In JavaScript, closures are created every time a function is created,
 * at function creation time.
 */
export function closure() {

  // Outer function
  const welcomeAuthor = () => {
    let name = "Adhithi"

    // Inner function
    const authorName = () => "Welcome " + name + "!";

    // Return inner function
    return authorName;
  }

  const a = welcomeAuthor();
  display(a());

  // Track number of clicks on button
  const updateClickCounter = () => {
    var counter = 0;

    // Inner function
    const incrementCounter = () => counter++;

    // return inner function
    return incrementCounter;
  }

  const counterResults = updateClickCounter();
  display(counterResults());
  display(counterResults());
  display(counterResults());
  display(counterResults());
  display(counterResults());
  display(counterResults());
}