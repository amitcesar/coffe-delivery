import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Header/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfimationSectionContainer } from "./style";

const DELIVERY_PRICE = 5.0;
export function ConfimationSection() {
  const { cartItemsTotalPrice, cartQuantity } = useCart();

  const cartTotal = cartItemsTotalPrice + DELIVERY_PRICE;

  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  const formateddItemsTotal = formatMoney(cartItemsTotalPrice);

  const formatedCartTotal = formatMoney(cartTotal);

  return (
    <ConfimationSectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R$ {formateddItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formatedCartTotal}
        </RegularText>
      </div>

      <Button
        text="confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfimationSectionContainer>
  );
}
