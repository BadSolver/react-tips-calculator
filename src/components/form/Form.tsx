import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { CustomSelect, options } from "../customSelect/CustomSelect";
import { Input } from "../input/Input";
import { FormContainer, Total, Title, Description } from "./style";



export const Form = () => {
  const [percent, setPercent] = useState(10);
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [total, setTotal] = useState(0.0);
  const [button, setButton] = useState(true);

  const handleBill = (value: string): void => {
    setBill(value);
  };

  const handlePeople = (value: string): void => {
    setPeople(value);
  };

  const getPercentValue = (): any => {
    return percent ? options.find((option) => option.value === percent) : "";
  };

  const handlePercent = (newValue: any): void => {
    setPercent(newValue.value);
  };

  const calculatedTips = (
    billStr: string,
    peopleStr: string,
    percent: number
  ): any => {
    const bill = Number(billStr);
    const people = Number(peopleStr);
    return bill + ((bill * percent) / 100) * people;
  };

  const onButtonClick = (): void => {
    setTotal(calculatedTips(bill, people, percent));
  };

  useEffect(() => {
    if (bill && people) {
      return setButton(false);
    } else {
      return setButton(true);
    }
  });
  return (
    <FormContainer>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input
        placeholder="Enter Bill"
        type="number"
        value={bill}
        onChange={handleBill}
      />
      <Input
        placeholder="Enter people"
        type="number"
        value={people}
        onChange={handlePeople}
      />
      <CustomSelect
        onChange={handlePercent}
        value={getPercentValue()}
      />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button
        disabled={button}
        text="Ohhhoooooo 🍻"
        type="submit"
        onClick={onButtonClick}
      />
    </FormContainer>
  );
};
