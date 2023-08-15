export function formatterPrice(price: number) {
  const formattedPrice = (price / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedPrice;
}
