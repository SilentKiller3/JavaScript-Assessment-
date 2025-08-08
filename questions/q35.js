export function pricesToCurrency(arr, symbol = "$") {
  return arr.map((price) => `${symbol}${price}`);
}
