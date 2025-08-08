export function mostExpensiveProduct(products) {
  return products.reduce((max, p) => (p.price > max.price ? p : max));
}
