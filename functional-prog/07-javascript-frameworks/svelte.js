/**
 * Svelte
 * A new approach to build user interfaces.
 * An alternative to React, Vue, Angular.
 * Flexible and components don't have to be pure.
 * Follows reactive programming.
 * Reactive programming is programming basically a program that
 *  reacts to events over time.
 * Svelte lets you write reactive code with Javascript!
 */

/**
 * Shift bulk of the work from the browser to the compiler.
 *
 * Components are not required to embrace functional programming
 *  principles. Flexible components.
 *
 * Allows you to use functional programming concepts like immutable
 *  data and pure functions if you would like to.
 */

<svelte: options immutable={true} />

/**
 * Immutable Option
 * Tells the compiler to expect immutable data for a certain component.
 * By default, the immutable option's value is false.
 */

{/* <script> */ }
  import { afterUpdate } from 'svelte';
  import flash from './flash.js';

  export let todo;

  let button;

  afterUpdate(() => {
    flash(button);
  })
{/* </script> */ }