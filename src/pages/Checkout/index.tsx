import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function CheckoutOrderPage() {
  return (
    <CheckoutContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CheckoutContainer>
  );
}
