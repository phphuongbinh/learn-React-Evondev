import React from "react";
import { useAccordion } from "./accordion-context";

const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
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
