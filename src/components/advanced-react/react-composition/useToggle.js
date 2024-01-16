import { useState } from "react";
export default function useToggle() {
  const [value, setValue] = useState(false);
  const handleToggleValue = () => {
    setValue((value) => !value);
  };
  return {
    value,
    handleToggleValue,
  };
}
