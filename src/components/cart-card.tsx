import { ChangeEvent } from "react";
import { styled } from "styled-components";

import { TrashIcon } from "./icons/trash-icon";
import { formatterPrice } from "@/utils/formatter-price";
import { ProductInCart } from "@/types/product";

const Card = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  img {
    max-width: 256px;
    max-height: 100%;
  }
`;

const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 20px;
  color: var(--color-text-dark-two);

  h2 {
    font-size: 20px;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    select {
      background-color: var(--color-secundary);
      border: 1px solid var(--color-text-dark-tree);
      border-radius: 8px;
      padding: 10px;
      width: 65px;
      color: var(--color-text-dark-tree);
    }

    strong {
      font-weight: 600;
      font-size: 16px;
      color: var(--color-shapes-dark);
    }
  }
`;

interface CartCardProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
}

export function CartCard({ product, handleUpdateQuantity }: CartCardProps) {
  const handleUpdate = (event: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(event.target.value));
  };

  return (
    <Card>
      <img src={product.image_url} alt={product.name} />
      <CardInfos>
        <h2>
          {product.name}
          <TrashIcon />
        </h2>
        <p>{product.description}</p>
        <div>
          <select value={product.quantity} onChange={handleUpdate}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <strong>
            {formatterPrice(product.price_in_cents * product.quantity)}
          </strong>
        </div>
      </CardInfos>
    </Card>
  );
}
