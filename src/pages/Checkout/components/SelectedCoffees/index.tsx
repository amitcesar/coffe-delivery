import { TitleText } from "../../../../components/Header/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfimationSection } from "./ConfimationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((coffeItem) => (
          <CoffeeCartCard key={coffeItem.id} coffee={coffeItem} />
        ))}

        <ConfimationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
