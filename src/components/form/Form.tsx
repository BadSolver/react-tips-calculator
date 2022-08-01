import { FormEvent, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { useInput } from "../../hooks/useInput";
import { ITipsOption } from "../../types";
import { Button } from "../button/Button";
import { CustomSelect, options } from "../customSelect/CustomSelect";
import { Input } from "../input/Input";
import { StyledForm, Subtitle, Title, Total } from "./style";

export const Form = () => {
  const bill = useInput();
  const people = useInput();
  const [option] = useState<ITipsOption[]>(options);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [tips, setTips] = useState<ITipsOption>({
    value: 10,
    label: "10%",
  });
  const [total, setTotal] = useState<number>(0);

  const calculatedTips = (
    billStr: string,
    peopleStr: string,
    tips: number
  ): number => {
    const bill = Number(billStr);
    const people = Number(peopleStr);
    return (bill + (bill * tips) / 100) / people;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotal(calculatedTips(bill.value, people.value, tips.value));
  };

  const hadleSelect = (option: SingleValue<ITipsOption>): void => {
    if (option) {
      setTips(option);
    }
  };

  useEffect((): void => {
    bill.value && people.value ? setDisabled(false) : setDisabled(true);
  }, [bill, people]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" {...bill} />
      <Input placeholder="Enter  persons" {...people} />
      <CustomSelect tips={tips} handleSelect={hadleSelect} options={option} />
      <Total>Total: {total.toFixed(2)} $</Total>
      <Button text="Ohhhoooo 🍻" disabled={disabled} />
    </StyledForm>
  );
};
