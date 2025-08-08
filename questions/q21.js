export function countTotalCharacters(arr) {
  return arr.reduce((sum, str) => sum + str.length, 0);
}
