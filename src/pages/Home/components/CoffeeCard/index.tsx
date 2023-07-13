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

export function CoffeeCard() {
  return (
    <CoffeeCardConteiner>
      <img src={CoffeItem} />
      <Tags>
        <span>Tradicional</span>
        <span>gelado</span>
      </Tags>

      <CoffeeName>Expresso Cremoso</CoffeeName>
      <CoffeeDescription>
        Café expresso tradicional com espuma cremosa
      </CoffeeDescription>

      <CoffeCardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,99
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
