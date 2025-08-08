export function productsInPriceRange(products, min, max) {
  return products.filter((p) => p.price >= min && p.price <= max);
}
