import { useFilter } from "@/hooks/useFilter";
import { styled } from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";

interface ListPrpos {
  selected: boolean;
}

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 5px;

  li {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
  }
`;

const Item = styled.li<ListPrpos>`
  background: ${(prop) =>
    prop.selected ? "transparent" : "var(--color-shapes-light)"};
  color: ${(prop) =>
    prop.selected ? "var(--color-orange-low)" : "var(--color-text-dark)"};
  border-color: ${(prop) =>
    prop.selected ? "var(--color-orange-low)" : "var(--color-shapes-light)"};
`;

const ItemArrow = styled.li`
  background: var(--color-shapes-light);
  color: var(--color-text-dark);
  border-color: var(--color-shapes-light);

  svg {
    transform: rotate(90deg);
  }

  &:nth-of-type(2) {
    svg {
      transform: rotate(-90deg);
    }
  }
`;

export function Pagination() {
  const { page, setPage } = useFilter();

  const handleChangeType = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <List>
        <Item selected={page === 1} onClick={() => handleChangeType(1)}>
          1
        </Item>
        <Item selected={page === 2} onClick={() => handleChangeType(2)}>
          2
        </Item>
        <Item selected={page === 3} onClick={() => handleChangeType(3)}>
          3
        </Item>
        <Item selected={page === 4} onClick={() => handleChangeType(4)}>
          4
        </Item>
        <Item selected={page === 5} onClick={() => handleChangeType(5)}>
          5
        </Item>
      </List>

      <List>
        <ItemArrow onClick={() => handleChangeType(page > 1 ? page - 1 : 1)}>
          <ArrowIcon />
        </ItemArrow>
        <ItemArrow onClick={() => handleChangeType(page < 5 ? page + 1 : 5)}>
          <ArrowIcon />
        </ItemArrow>
      </List>
    </Container>
  );
}
