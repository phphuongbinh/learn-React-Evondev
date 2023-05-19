import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  const handleInputChange = (event) => {
    const type = event.target.type;

    setValues({
      ...values,
      [event.target.name]:
        type === "checkbox" ? event.target.checked : event.target.value,
    });
  };
  // const handleTextareaChange = (event) => {
  //   setMessage(event.target.value);
  // };
  // const handleSelectChange = (event) => {
  //   setCountry(event.target.value);
  // };
  return (
    <div className="flex gap-5">
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your email"
        onChange={handleInputChange}
      />
      <input type="checkbox" name="hobby" onChange={handleInputChange} />
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
    </div>
  );
};

export default Form;
