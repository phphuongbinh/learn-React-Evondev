import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div
      className="flex items-center justify-between p-3 mb-2 border border-gray-300 rounded-lg cursor-pointer"
      onClick={handleToggleShow}
    >
      <span>{children}</span> {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
