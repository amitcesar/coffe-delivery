import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Header/Typography";
import { ConfimationSectionContainer } from "./style";

export function ConfimationSection() {
  return (
    <ConfimationSectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 4,99</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 14,89
        </RegularText>
      </div>

      <Button text="confirmar pedido" />
    </ConfimationSectionContainer>
  );
}
