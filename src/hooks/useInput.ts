import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string = '') => {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
}