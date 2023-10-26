/**
 * Currying
 * Transforms a function with multiple arguments into several
 *  functions containing a single argument
 * Wraps a function inside a function
 *
 * Could be confusing to understand
 * Not easy to understand
 * Useful for functional composition
 */

export function curryingFunc() {

  const add = (a, b, c) => a + b + c;

  display(add(5, 10, 20));

  // Curry function to add numbers
  const add2 = (a) => (b) => (c) => a + b + c;

  display(add2(5)(10)(20));

  const sendMessage = greeting => name => message => `${greeting} ${name} ${message}`;

  // display(sendMessage("Namaste!")("Raj")("How are you?"));

  const sendMessage2 = sendMessage("Hallow!");
  const sendMessage3 = sendMessage2("Mart");
  const sendMessage4 = sendMessage3("How are you?");

  display(sendMessage4);

}