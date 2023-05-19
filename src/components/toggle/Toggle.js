import React, { useState } from "react";
import "./ToggleStyle.css";

function Toggle() {
  // 1. enabling state
  // 2. initilize state
  // 3. reading state
  // 4. update state

  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
