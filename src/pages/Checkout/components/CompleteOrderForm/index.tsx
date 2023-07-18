import { TitleText } from "../../../../components/Header/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "./AdressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="Pagamento feito na entrega. Escolha a forma que desejar pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
