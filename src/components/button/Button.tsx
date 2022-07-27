import { StyledButton } from "./style"

interface IProps {
  disabled: boolean,
  text: string,
  type: 'button' | 'submit' | 'reset',
}

export const Button = ({disabled, text, type}: IProps) => {
  return (
    <StyledButton disabled={disabled} type={type}>{text}</StyledButton>
  )
}
