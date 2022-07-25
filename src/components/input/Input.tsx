import { type } from 'os'
import React from 'react'
import { StyledInput } from './style';

interface IInput {
  placeholder: string;
  type: string;
}

export const Input = ({placeholder, type}: IInput) => {
  return (
    <StyledInput placeholder={placeholder} type={type}/>
  )
}
