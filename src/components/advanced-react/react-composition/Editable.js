import React, { useState } from "react";
import useToggle from "./useToggle";

const Editable = () => {
  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input
          type="text"
          name=""
          id=""
          className="p-3 border border-gray-400 rounded-lg"
        />
      )}
      <button onClick={handleToggleEdit}>Open Edit</button>
    </div>
  );
};

export default Editable;
