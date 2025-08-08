export function getTitles(products, category) {
  return products.filter((p) => p.category === category).map((p) => p.title);
}
