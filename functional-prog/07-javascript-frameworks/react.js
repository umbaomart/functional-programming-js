/**
 * React
 * React is a Javascript library for building
 *  rich user interfaces.
 * UI is built from small units like buttons, text, images
 * React lets you combine them into reusable,
 *  nestable components.
 */

function CoffeeRecipe({ guests }) {
  return (
    <ol>
      <li>Boil {guests} cups of water.</li>
      <li>Add {guests} spoons of coffee.</li>
      <li>Add {0.5 * guests} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}