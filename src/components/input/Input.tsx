import { StyledInput } from "./style";

interface IProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ placeholder, type, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
  );
};
