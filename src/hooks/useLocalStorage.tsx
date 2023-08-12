import { useState } from "react";

export function UseLocalStorage<T>(item: string) {
  const cartStorage = JSON.parse(localStorage.getItem(item) ?? "");

  const [value, setValue] = useState(cartStorage);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
