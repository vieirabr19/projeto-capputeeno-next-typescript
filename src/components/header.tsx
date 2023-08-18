"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

import { PrimaryInputWithSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";
import { useRouter } from "next/navigation";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 160px;
  background-color: white;

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
  cursor: pointer;
`;

export function Header() {
  const router = useRouter();
  const { search, setSearch } = useFilter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className} onClick={handleNavigate}>
        capputeeno
      </Logo>
      <div>
        <PrimaryInputWithSearchIcon
          placeholder="Procurando por algo específico?"
          value={search}
          handleChange={setSearch}
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
