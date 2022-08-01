import { StyledButton } from "./style";

interface IProps {
  text: string;
  disabled: boolean;
}

export const Button = ({ text, disabled }: IProps) => {
  return (
    <StyledButton disabled={disabled} type="submit">
      {text}
    </StyledButton>
  );
};
