import { createContext, useContext, useState } from "react";

const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(10);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used with a CountProvider");
  return context;
}

export { CountProvider, useCount };
