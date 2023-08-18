import { useRouter } from "next/navigation";
import { styled } from "styled-components";

import { formatterPrice } from "@/utils/formatter-price";

const Card = styled.div`
  max-width: 500px;
  border-radius: 8px 8px 0px 0px;
  background-color: white;
  overflow: hidden;
  padding-bottom: 5px;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 100%;
    max-height: 300px;
  }
`;

const CardInfos = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  width: 90%;
  margin: 0 auto;

  h3 {
    color: var(--color-text-dark-two);
    font-weight: 300;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-shapes-dark);
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--color-shapes);
    border: none;
  }
`;

interface CardProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

export function ProductsCard(props: CardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("product?id=" + props.id);
  };

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} alt={props.name} title={props.name} />
      <CardInfos>
        <h3>{props.name}</h3>
        <hr />
        <p>{formatterPrice(props.price)}</p>
      </CardInfos>
    </Card>
  );
}
