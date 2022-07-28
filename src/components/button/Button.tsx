import { StyledButton } from "./style";

interface IProps {
  text: string;
  disabled: boolean;
  type: "button" | "submit" | "reset";
}

export const Button = ({ text, disabled, type }: IProps) => {
  return (
    <StyledButton 
      disabled={disabled} 
      type={type}
      >{text}
    </StyledButton>
  );
};
