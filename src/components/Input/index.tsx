import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />;
}
