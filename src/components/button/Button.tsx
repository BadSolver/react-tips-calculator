import React from "react"
import { StyledButton } from "./style"

interface IProps {
  disabled: boolean,
  text: string,
  type: 'button' | 'submit' | 'reset',
  onClick: () => void
}

export const Button = ({disabled, text, type, onClick}: IProps) => {
  return (
    <StyledButton 
      disabled={disabled} 
      type={type}
      onClick={({ target }: React.MouseEvent<HTMLButtonElement>): void => onClick()}>{text}      
    </StyledButton>
  )
}
