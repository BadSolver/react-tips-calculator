import Select from "react-select";
import { customStyles } from "./style";
import { ITipsOption } from "../../types";
import React from "react";

interface IProps {
  tips: ITipsOption;
  handleSelect: (option: ITipsOption | null) => void;
  options: ITipsOption[];
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

export const CustomSelect = ({ tips, handleSelect, options }: IProps) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={tips}
      onChange={handleSelect}
      isMulti={false}
    />
  );
};
