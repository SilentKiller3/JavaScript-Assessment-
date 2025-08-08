export function getTitlesSortedByPrice(products) {
  return products.sort((a, b) => a.price - b.price).map((p) => p.title);
}
