import { styled } from "styled-components";

import { UseLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  background-color: var(--color-danger);
  border-radius: 50%;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -8px;
  top: 16px;
`;

const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = UseLocalStorage("cart-items");

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
