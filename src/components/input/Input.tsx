import { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type="number"
      onChange={onChange}
      value={value}
    />
  );
};
