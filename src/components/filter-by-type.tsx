import { styled } from "styled-components";

import { useFilter } from "@/hooks/useFilter";
import { FilterTypes } from "@/types/filter-types";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
`;

const FilterListItem = styled.li<FilterItemProps>`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  line-height: 22px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: var(--color-orange-low);
  }
  font-weight: ${(prop) => (prop.selected ? "600" : "400")};
  color: ${(prop) =>
    prop.selected ? " var(--color-text-dark-two)" : "var(--color-text-dark)"};
  border-bottom: ${(prop) =>
    prop.selected ? "4px solid var(--color-orange-low)" : ""};
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterListItem
        selected={type === FilterTypes.ALL}
        onClick={() => handleChangeType(FilterTypes.ALL)}
      >
        Todos os produtos
      </FilterListItem>
      <FilterListItem
        selected={type === FilterTypes.SHIRT}
        onClick={() => handleChangeType(FilterTypes.SHIRT)}
      >
        Camisetas
      </FilterListItem>
      <FilterListItem
        selected={type === FilterTypes.MUG}
        onClick={() => handleChangeType(FilterTypes.MUG)}
      >
        Canecas
      </FilterListItem>
    </FilterList>
  );
}
