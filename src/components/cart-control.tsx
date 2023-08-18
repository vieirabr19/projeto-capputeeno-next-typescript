import { styled } from "styled-components";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
`;

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

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage("cart-items", []);

  const handleNavigate = () => {
    router.push("/cart");
  };

  return (
    <Button onClick={handleNavigate}>
      <CartIcon />
      <CartCount>{value.length > 0 ? value.length : 0}</CartCount>
    </Button>
  );
}
