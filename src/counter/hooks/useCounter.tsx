import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    handleAdd,
    handleSubtract,
    resetCounter,
  };
};
