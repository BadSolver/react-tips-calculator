import Select from "react-select";
import { IOption } from "../../types";
import { customStyles } from "./style";

interface ICustomSelect {
  onChange: (newValue: any) => void;
  value: IOption | undefined | "";
  options: IOption[];
}

export const CustomSelect = ({ onChange, value, options }: ICustomSelect) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      options={options}
      styles={customStyles}
    />
  );
};
