export function formatPrice(price: number): string {
  const priceFormated = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);

  return priceFormated;
}
