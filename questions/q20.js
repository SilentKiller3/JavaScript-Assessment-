export function removeDuplicatess(arr) {
  const unique = [];

  for (const elements of arr) {
    const found = unique.some((item) => {
      if (Array.isArray(item) && Array.isArray(elements)) {
        return JSON.stringify(item) === JSON.stringify(elements);
      } else {
        return item === elements;
      }
    });

    if (!found) {
      unique.push(elements);
    }
  }

  return unique;
}
