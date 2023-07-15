import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CheckoutContainer } from "./styles";

export function CheckoutOrderPage() {
  return (
    <CheckoutContainer className="container">
      <CompleteOrderForm />
    </CheckoutContainer>
  );
}
