import { StyledInput } from "./style";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ placeholder, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type='number'
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
  );
};
