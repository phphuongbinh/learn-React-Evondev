import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form2 = () => {
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (event) => {
  //   const type = event.target.type;

  //   setValues({
  //     ...values,
  //     [event.target.name]:
  //       type === "checkbox" ? event.target.checked : event.target.value,
  //   });
  // };
  // const handleTextareaChange = (event) => {
  //   setMessage(event.target.value);
  // };
  // const handleSelectChange = (event) => {
  //   setCountry(event.target.value);
  // };
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [errorName, setErrorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setErrorName("Your full name is empty");
    }
  };
  return (
    <form className="flex gap-5" autoComplete="off">
      <div className="flex flex-col gap-y-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {errorName}
      </div>
      <input
        type="email"
        name="email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input type="checkbox" name="hobby" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {/* {message}
      <textarea
        onChange={handleTextareaChange}
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="my">USA</option>
        <option value="anhquoc">UK</option>
      </select> */}
    </form>
  );
};

export default Form2;
