import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../../Portal";

const TooltipAvenced = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="inline-block ml-5">
      <CSSTransition in={visible} classNames="fade" timeout={300} unmountOnExit>
        {(status) => (
          <Portal visible={status !== "exited"}>
            <p
              className="absolute inline-block p-3 text-white transition-all -translate-y-full bg-black rounded-lg -translate-x-2/4 tooltip"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAvenced;
