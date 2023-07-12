import { CoffeeCardConteiner, Tags } from "./styles";

import CoffeItem from "../../../../assets/coffe-item.png";

export function CoffeeCard() {
  return (
    <CoffeeCardConteiner>
      <img src={CoffeItem} />
      <Tags>
        <span>Tradicional</span>
        <span>gelado</span>
      </Tags>
    </CoffeeCardConteiner>
  );
}
