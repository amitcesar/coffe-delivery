import {
  CoffeeCardConteiner,
  Tags,
  CoffeeName,
  CoffeeDescription,
  CoffeCardFooter,
  AddCartWrapper,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import CoffeItem from "../../../../assets/coffe-item.png";
import {
  RegularText,
  TitleText,
} from "../../../../components/Header/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeProps) {
  const formatedPrice = formatMoney(coffee.price);
  return (
    <CoffeeCardConteiner>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CoffeCardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CoffeCardFooter>
    </CoffeeCardConteiner>
  );
}
