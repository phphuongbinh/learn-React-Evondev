import React from "react";
import { useAccordion } from "./accordion-context";

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();

  return (
    <>
      {show && (
        <div className="p-3 border border-gray-200 rounded-lg">{children}</div>
      )}
    </>
  );
};

export default AccordionContent;
