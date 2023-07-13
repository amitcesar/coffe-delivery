import { IconWrapper, QuantityInpuntContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <QuantityInpuntContainer>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInpuntContainer>
  );
}
