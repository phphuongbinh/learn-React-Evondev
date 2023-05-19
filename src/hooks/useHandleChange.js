import { useState } from "react";

export default function useHandleChange(initialValue) {
  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    const type = event.target.type;

    setValues({
      ...values,
      [event.target.name]:
        type === "checkbox" ? event.target.checked : event.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
}
