import { TitleText } from "../../../../components/Header/Typography";
import { CompleteOrderFormContainer } from "./styles";

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
    </CompleteOrderFormContainer>
  );
}
