import { StylesConfig } from "react-select";
import { ITipsOption } from "../../types";

export const customStyles: StylesConfig<ITipsOption> = {
  control: (styles) => ({
    ...styles,
    textAlign: "center",
    color: "#756C6C",
    borderRadius: "30px",
    paddingTop: "15px",
    paddingBottom: "15px",
    border: "none",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
