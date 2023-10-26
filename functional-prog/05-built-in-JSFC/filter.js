/**
 * Filter Function
 * filter() function creates a shallow copy of a portion of a given array.
 * Filters down to just the elements that pass the callback function's test.
 * Array elements which do not pass the callback func test are not included in new array!
 */

export function filter() {

  const words = [
    "Courses",
    "Rating",
    "Pluralsight",
    "JavaScript",
    "Functional Programming"
  ];

  const isWordGreaterThanSeven = (word) => word.length > 7;

  const result = words.filter(isWordGreaterThanSeven);

  display(words);
  display(result);

}