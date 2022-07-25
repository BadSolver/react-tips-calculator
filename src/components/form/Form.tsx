import { useState } from 'react'
import { IOption } from '../../types'
import { CustomSelect } from '../customSelect/CustomSelect'
import { Input } from '../input/Input'
import { FormTitle, FormContainer, FormDescription } from './style'

const options: IOption[] = [
{
  value: 10,
  label: "10%"
},
{
  value: 15,
  label: "15%"
},
{
  value: 20,
  label: "20%"
}]



export const Form = () => {
  const [percent, setPercent] = useState(10)
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [total, setTotal] = useState(0.0)

  const handleBill = (value: string): void => {
    setBill(value)
  }

  const handlePeople = (value: string): void => {
    setPeople(value)
  }

  const getPercentValue = (): any => {
    return percent ? options.find((option) => option.value === percent) : ''
}

const handlePercent = (newValue: any): void => {
  setPercent(newValue.value)
}

  return (
    <FormContainer>
      <FormTitle>Welcome to App</FormTitle>
      <FormDescription>Let’s go calculate your tips</FormDescription>
      <Input placeholder='Enter bill' type='text'/>
      <Input placeholder='Enter  persons' type='text'/>
      <CustomSelect onChange={handlePercent} value={getPercentValue()} options={options}/>
    </FormContainer>
  )
}
