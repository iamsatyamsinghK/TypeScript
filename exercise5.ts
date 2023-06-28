
function getLength(value: string | any[]): number {
  return value.length;
}
console.log(getLength("Hello")); // Output: 5

const array = [1, 2, 3, 4, 5];
console.log(getLength(array)); // Output: 5
