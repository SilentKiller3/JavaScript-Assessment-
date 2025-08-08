export function getPricesWithDiscountType(products, discountType) {
  return products
    .filter((p) => p.discount.type === discountType)
    .map((p) => p.price);
}
