import React from "react";

const Cell = ({ value, className, onClick }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
