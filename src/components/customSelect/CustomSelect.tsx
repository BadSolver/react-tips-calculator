import Select from "react-select";
import { ITipsOption } from "../../types";
import { customStyles } from "./style";

interface ICustomSelect {
  onChange: (newValue: any) => void;
  value: ITipsOption | undefined | "";
}

export const options: ITipsOption[] = [
  {
    value: 10,
    label: "10%",
  },
  {
    value: 15,
    label: "15%",
  },
  {
    value: 20,
    label: "20%",
  },
];

export const CustomSelect = ({ onChange, value}: ICustomSelect) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      options={options}
      styles={customStyles}
    />
  );
};
