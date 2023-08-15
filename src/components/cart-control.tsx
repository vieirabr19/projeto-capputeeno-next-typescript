import { styled } from "styled-components";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";

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
  const { value } = useLocalStorage("cart-items", []);

  return (
    <Container>
      <CartIcon />
      <CartCount>{value.length > 0 ? value.length : 0}</CartCount>
    </Container>
  );
}
