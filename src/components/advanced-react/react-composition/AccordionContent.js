import React from "react";

const AccordionContent = ({ show, children }) => {
  return (
    <>
      {show && (
        <div className="p-3 border border-gray-200 rounded-lg">{children}</div>
      )}
    </>
  );
};

export default AccordionContent;
