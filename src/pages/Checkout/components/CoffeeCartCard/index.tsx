import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";

import { RegularText } from "../../../../components/Header/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";

import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCardProps {
  coffee: CartItem;
}
export function CoffeeCartCard({ coffee }: CoffeeCardProps) {
  const totalCoffee = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(totalCoffee);

  const { changeItemQuantityCart, removeCartItem } = useCart();

  function handleIncrease() {
    changeItemQuantityCart(coffee.id, "increase");
  }

  function handleDecrease() {
    changeItemQuantityCart(coffee.id, "decrease");
  }

  function handleDeleteItemCart() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleDeleteItemCart}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
