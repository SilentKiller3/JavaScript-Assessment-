export function mostChipestProduct(products) {
  return products.reduce((min, p) => (p.price < min.price ? p : min));
}
