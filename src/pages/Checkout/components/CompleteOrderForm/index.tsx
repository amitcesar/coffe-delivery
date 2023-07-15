import { TitleText } from "../../../../components/Header/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";

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
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
