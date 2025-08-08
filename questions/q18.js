export function findLongStrings(arr, minLength = 4) {
  return arr.filter((str) => str.length > minLength);
}
