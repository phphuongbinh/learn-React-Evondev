import React, { useState } from "react";

const HandleValue = () => {
  return (
    <Input>{(value) => <DisplayValue value={value}></DisplayValue>}</Input>
  );
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="p-3 m-3 border border-gray-400 rounded-md"
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {props.children(value)}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="font-bold text-blue-500">{value}</span>;
};

export default HandleValue;
