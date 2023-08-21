import { styled } from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;

  button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-text-dark);
    cursor: pointer;
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  top: 23px;
  right: 0;
  width: 176px;
  border-radius: 4px;
  background-color: white;
  padding: 12px 16px;
  list-style: none;
  z-index: 99;

  li + li {
    margin-top: 4px;
  }
`;

const PriorityFilterList = styled.li`
  font-size: 14px;
  color: var(--color-text-dark);
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: var(--color-orange-low);
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleChangeFilter = () => {
    setIsOpen((prev) => !prev);
  };

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={() => handleChangeFilter()}>
        Organizar por
        <ArrowIcon />
      </button>

      {isOpen && (
        <PriorityFilter>
          <PriorityFilterList
            onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}
          >
            Novidades
          </PriorityFilterList>
          <PriorityFilterList
            onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}
          >
            Preço: Maior - menor
          </PriorityFilterList>
          <PriorityFilterList
            onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}
          >
            Preço: Menor - maior
          </PriorityFilterList>
          <PriorityFilterList
            onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}
          >
            Mais vendidos
          </PriorityFilterList>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
