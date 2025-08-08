export function removeDuplicates(arr) {
  const a = arr.filter((value, index) => arr.indexOf(value) === index);
  console.log(a);
}
