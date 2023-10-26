export function script () {
  let greeting = "Namaste!";
  // Assign a function to a variable
  const topic = function printTopic(t) {
    return t;
  }

  const topic2 = (t) => `${greeting} You are learning ${t}`;
  display(topic2("JavaScript"));

  // Pass a function as an argument to another function
  const numbers = [1, 2, 3, 4, 5];
  const multiplyTwo = (number) => number * 2;
  const timesTwo = numbers.map(multiplyTwo);
  display(timesTwo);

  // Return a function from another function
  const firstClassFunction = () => () =>
    display("Hi! I am a function returned from another function");

  let displayFunction = firstClassFunction();
  displayFunction();

  display(topic2("pure functions"));


}