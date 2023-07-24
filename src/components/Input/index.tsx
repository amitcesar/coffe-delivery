import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Header/Typography";
import { InputStyleContainer, InputWrapper } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref} />
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
