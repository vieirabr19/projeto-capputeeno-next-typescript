import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

import { SeachIcon } from "./search-icon";

export const PrimaryInput = styled.input`
  font-family: inherit;
  display: inline-flex;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 8px;
  background: var(--color-secundary);
  color: var(--color-text-dark);
  border: none;
  outline: none;
  width: 320px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input {
    padding: 10px 50px 10px 16px;
  }

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWithSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SeachIcon />
    </InputContainer>
  );
}
