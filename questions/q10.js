export function countElements(arr) {
  const count = {};
  for (const element of arr) {
    count[element] = (count[element] || 0) + 1;
  }
  return count;
}
