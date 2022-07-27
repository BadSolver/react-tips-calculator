import { useEffect, useState } from 'react'
import { IOption } from '../../types'
import { Button } from '../button/Button'
import { CustomSelect } from '../customSelect/CustomSelect'
import { Input } from '../input/Input'
import { FormTitle, FormContainer, FormDescription, Total } from './style'

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
  const [total, setTotal] = useState('0.00$')
  const [button, setButton] = useState(true)

  const handleBill = (value: string): void => {
    setBill(value)
  }

  const handlePeople = (value: string): void => {
    setPeople(value)
  }

  const handleTotal = (value: string): void => {
    setTotal(value)
  }

  const getPercentValue = (): any => {
    return percent ? options.find((option) => option.value === percent) : ''
}

const handlePercent = (newValue: any): void => {
  setPercent(newValue.value)
}

const calculatedTips = () => {

}

useEffect(() => {
  if (bill && people) {
    return setButton(false)
  }else{
    return setButton(true)
  }
  
})

  return (
    <FormContainer>
      <FormTitle>Welcome to App</FormTitle>
      <FormDescription>Let’s go calculate your tips</FormDescription>
      <Input placeholder='Enter Bill' type='number' value={bill} onChange={handleBill}/>
      <Input placeholder='Enter people' type='number' value={people} onChange={handlePeople}/>
      <CustomSelect onChange={handlePercent} value={getPercentValue()} options={options}/>
      <Total>Total: {total}</Total>
      <Button disabled={button} text='Ohhhoooooo 🍻' type="submit"/>
    </FormContainer>
  )
}
