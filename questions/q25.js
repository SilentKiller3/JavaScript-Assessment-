export function productsGreaterThan(products, limit = 100) {
  return products.filter((p) => p.price > limit);
}
