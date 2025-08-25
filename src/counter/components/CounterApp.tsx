import { useCounter } from "../hooks/useCounter";

export const CounterApp = () => {
  const { counter, handleAdd, handleSubtract, resetCounter } = useCounter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter} </h1>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};
