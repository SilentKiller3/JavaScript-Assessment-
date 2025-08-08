export function totalPrice(products) {
  return products.reduce((sum, p) => sum + p.price, 0);
}
