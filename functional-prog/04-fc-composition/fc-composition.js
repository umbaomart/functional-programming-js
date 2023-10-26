import { pipe } from "ramda"

/**
 * Functional Composition
 * Input => Func A => Func B => Func C => Output
 * Syntax: function1(function2(value))
 *
 * Ref for using pipe/compose: Functional Composition in JavaScript
 * Ramda: https://ramdajs.com/docs/#pipe
 * Loadash: https://lodash.com/docs/4.17.15#flow
 */

export function fcComposition() {

  const compose = (f, g) => x => f(g(x));
  const getAge = user => user.age;
  const isAllowedAge = age => age >= 21;
  const user = { name: "Adam", age: 25 };
  const isUserAllowedToDrink = compose(isAllowedAge, getAge);
  display(isUserAllowedToDrink(user)); // true

  const triple = x => x * 3;
  const cube = x => x * x * x;

  // function pipe
  var output = pipe(cube, triple)(2); // Left to right
  var output2 = compose(cube, triple)(2); // Right to left
  display(output); // 24
  display(output2); // 216

}