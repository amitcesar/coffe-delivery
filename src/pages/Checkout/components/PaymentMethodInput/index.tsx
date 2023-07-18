import { PaymentMethodContainer } from "./style";

import { CreditCard } from "phosphor-react";
import { useTheme } from "styled-components";
export function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodContainer>
  );
}
