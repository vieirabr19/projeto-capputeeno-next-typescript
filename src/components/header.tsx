"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

import { PrimaryInputWithSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 160px;

  > div {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
