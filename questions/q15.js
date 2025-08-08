export function capitalizeFirstLetter(arr) {
  return arr.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
}
