export function getUniqueCategories(products) {
  const categories = products.map((p) => p.category);
  return [...new Set(categories)];
}
