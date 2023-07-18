import { TitleText } from "../../../../components/Header/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
