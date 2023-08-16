"use client";

import { useRouter } from "next/navigation";
import { styled } from "styled-components";

import { BackIcon } from "./icons/back-cion";

const Button = styled.button`
  border: none;
  color: var(--color-text-back);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  background: transparent;
`;

interface BtnProps {
  navigate: string;
}

export function BackButton({ navigate }: BtnProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <BackIcon /> Voltar
    </Button>
  );
}
