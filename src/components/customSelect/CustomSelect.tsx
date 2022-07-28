import Select from "react-select";
import { customStyles } from "./style";
import { ITipsOption } from "../../types";

interface IProps {
  tips: ITipsOption;
  handleSelect: (option: ITipsOption | null) => void;
  options: ITipsOption[];
}

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
