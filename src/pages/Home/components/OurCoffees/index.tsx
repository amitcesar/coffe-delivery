import { TitleText } from "../../../../components/Header/Typography";
import { CoffeeCard } from "../CoffeeCard";

import { CoffeeList, OurCoffesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffesContainer>
  );
}
