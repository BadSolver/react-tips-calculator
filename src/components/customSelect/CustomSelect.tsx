import Select from 'react-select/dist/declarations/src/Select'
import { IOption } from '../../types'

interface ICustomSelect {
  onChange: (newValue: any) => void;
  value: IOption | undefined | "";
  options: IOption[];
}

export const CustomSelect = ({onChange, value, options}: ICustomSelect) => {
  return (
    <Select onChange={onChange} value={value} options={options}/>
  )
}
