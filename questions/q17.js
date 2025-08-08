export function replaceWord(arr, oldWord, newWord) {
  return arr.map((word) => (word === oldWord ? newWord : word));
}
