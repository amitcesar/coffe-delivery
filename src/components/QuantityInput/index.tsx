import { IconWrapper, QuantityInpuntContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  size?: "small" | "medium";
}

export function QuantityInput({ size = "medium" }: QuantityInputProps) {
  return (
    <QuantityInpuntContainer size={size}>
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
